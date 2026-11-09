import React, { useEffect, useRef } from 'react';

const INTERACTIVE = 'a, button, [role="button"], .cursor-pointer';

// 颜色依次渐变：蓝 → 紫 → 粉 → 橘 → 黄，再倒着回来。相邻颜色之间不会出现发灰的过渡色
const STOPS: [number, number, number][] = [
  [110, 160, 255],
  [170, 150, 255],
  [255, 140, 170],
  [255, 185, 125],
  [255, 208, 100]
];
const TRAIL_MS = 700;
const RIPPLE_MS = 900;

const colorAt = (distance: number) => {
  const span = STOPS.length - 1;
  const phase = (distance / 260) % (span * 2);
  const t = phase <= span ? phase : span * 2 - phase;
  const i = Math.min(Math.floor(t), span - 1);
  const f = t - i;
  return STOPS[i].map((c, k) => Math.round(c + (STOPS[i + 1][k] - c) * f));
};

/** 固定在页面背后的柔光层：鼠标移动时拖出一条渐变色的光尾并慢慢消散，点击时扩散一圈光环。 */
export const BackgroundGlow = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const trail: { x: number; y: number; c: number[]; t0: number }[] = [];
    let ripple: { x: number; y: number; t0: number } | null = null;
    let last: { x: number; y: number } | null = null;
    let travelled = 0;
    let w = 0;
    let h = 0;
    let raf = 0;

    const draw = (now: number) => {
      raf = 0;
      ctx.clearRect(0, 0, w, h);

      while (trail.length && now - trail[0].t0 > TRAIL_MS) trail.shift();
      for (const p of trail) {
        const life = 1 - (now - p.t0) / TRAIL_MS;
        const r = 40 + 70 * life;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        g.addColorStop(0, `rgba(${p.c[0]}, ${p.c[1]}, ${p.c[2]}, ${0.3 * life})`);
        g.addColorStop(1, `rgba(${p.c[0]}, ${p.c[1]}, ${p.c[2]}, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(p.x - r, p.y - r, r * 2, r * 2);
      }

      if (ripple) {
        const t = (now - ripple.t0) / RIPPLE_MS;
        if (t >= 1) {
          ripple = null;
        } else {
          const r = 20 + (1 - Math.pow(1 - t, 3)) * 200;
          const c = colorAt(travelled);
          const g = ctx.createRadialGradient(ripple.x, ripple.y, r * 0.6, ripple.x, ripple.y, r);
          g.addColorStop(0, `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0)`);
          g.addColorStop(0.85, `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${0.3 * (1 - t)})`);
          g.addColorStop(1, `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (trail.length || ripple) raf = requestAnimationFrame(draw);
    };

    const request = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      request();
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      if (last) {
        const d = Math.hypot(e.clientX - last.x, e.clientY - last.y);
        if (d < 8) return;
        travelled += d;
      }
      last = { x: e.clientX, y: e.clientY };
      trail.push({ x: e.clientX, y: e.clientY, c: colorAt(travelled), t0: performance.now() });
      request();
    };
    const onLeave = () => {
      last = null;
    };
    const onDown = (e: PointerEvent) => {
      ripple = { x: e.clientX, y: e.clientY, t0: performance.now() };
      request();
    };

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerdown', onDown);
    document.documentElement.addEventListener('mouseleave', onLeave);
    resize();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none" />;
};

/** 自定义光标：小圆点 + 带惯性的圆环，悬停在可点击元素上时圆环放大反色，按下时收缩。 */
export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const root = document.documentElement;
    root.classList.add('custom-cursor');

    let tx = 0;
    let ty = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;
    let shown = false;
    let hoverOff = 0;

    const place = (el: HTMLElement, x: number, y: number) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      place(ring, rx, ry);
      raf = Math.abs(tx - rx) > 0.1 || Math.abs(ty - ry) > 0.1 ? requestAnimationFrame(loop) : 0;
    };

    const setVisible = (v: boolean) => {
      dot.classList.toggle('is-visible', v);
      ring.classList.toggle('is-visible', v);
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      place(dot, tx, ty);
      if (!shown) {
        shown = true;
        rx = tx;
        ry = ty;
        setVisible(true);
      }
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest?.(INTERACTIVE)) {
        window.clearTimeout(hoverOff);
        ring.classList.add('is-hover');
      } else {
        // 稍作延迟再取消，避免元素上浮或边缘抖动时圆环反复放大缩小
        window.clearTimeout(hoverOff);
        hoverOff = window.setTimeout(() => ring.classList.remove('is-hover'), 80);
      }
    };
    const onDown = () => ring.classList.add('is-down');
    const onUp = () => ring.classList.remove('is-down');
    const onLeave = () => {
      shown = false;
      setVisible(false);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    root.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(hoverOff);
      root.classList.remove('custom-cursor');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      root.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <div className="cursor-ring-inner" />
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
};
