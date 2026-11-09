import React, { useEffect, useRef } from 'react';

const PALETTE = ['#ff5263', '#ffb822', '#2575fc'];
const GAP = 24;
const RADIUS = 170;
const PULSE_MS = 700;
const INTERACTIVE = 'a, button, [role="button"], .cursor-pointer';

/** 固定在页面背后的圆点网格：鼠标靠近时圆点放大、变色并被轻轻推开，点击时扩散一圈涟漪。 */
export const BackgroundGrid = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = { x: -1000, y: -1000, tx: -1000, ty: -1000, s: 0, ts: 0 };
    let pulse: { x: number; y: number; t0: number } | null = null;
    let w = 0;
    let h = 0;
    let raf = 0;

    const draw = (now: number) => {
      raf = 0;
      mouse.x += (mouse.tx - mouse.x) * 0.2;
      mouse.y += (mouse.ty - mouse.y) * 0.2;
      mouse.s += (mouse.ts - mouse.s) * 0.12;

      let pr = -1;
      if (pulse) {
        pr = (now - pulse.t0) / PULSE_MS;
        if (pr >= 1) {
          pulse = null;
          pr = -1;
        }
      }
      const ringR = pr * 320;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#d1d5db';
      ctx.beginPath();
      const active: { x: number; y: number; k: number; c: string }[] = [];

      for (let gy = 0; gy * GAP < h + GAP; gy++) {
        for (let gx = 0; gx * GAP < w + GAP; gx++) {
          const bx = gx * GAP + GAP / 2;
          const by = gy * GAP + GAP / 2;
          let influence = 0;
          let ox = 0;
          let oy = 0;

          const dx = bx - mouse.x;
          const dy = by - mouse.y;
          const d = Math.hypot(dx, dy);
          if (mouse.s > 0.01 && d < RADIUS) {
            const t = 1 - d / RADIUS;
            influence = t * t * mouse.s;
            if (d > 0.01) {
              ox = (dx / d) * influence * 12;
              oy = (dy / d) * influence * 12;
            }
          }

          let boost = 0;
          if (pulse) {
            const pd = Math.hypot(bx - pulse.x, by - pulse.y);
            boost = (1 - Math.min(1, Math.abs(pd - ringR) / 36)) * (1 - pr);
          }

          const k = Math.max(influence, boost);
          if (k < 0.01) {
            ctx.moveTo(bx + 1, by);
            ctx.arc(bx, by, 1, 0, Math.PI * 2);
          } else {
            active.push({ x: bx + ox, y: by + oy, k, c: PALETTE[(gx + gy) % PALETTE.length] });
          }
        }
      }
      ctx.fill();

      for (const a of active) {
        ctx.globalAlpha = 0.3 + 0.7 * a.k;
        ctx.fillStyle = a.c;
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1 + a.k * 3.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      const busy =
        pulse ||
        Math.abs(mouse.tx - mouse.x) > 0.3 ||
        Math.abs(mouse.ty - mouse.y) > 0.3 ||
        Math.abs(mouse.ts - mouse.s) > 0.01;
      if (busy) raf = requestAnimationFrame(draw);
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
      if (mouse.ts === 0) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
      mouse.ts = 1;
      request();
    };
    const onLeave = () => {
      mouse.ts = 0;
      request();
    };
    const onDown = (e: PointerEvent) => {
      pulse = { x: e.clientX, y: e.clientY, t0: performance.now() };
      request();
    };

    window.addEventListener('resize', resize);
    resize();
    if (!reduceMotion) {
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerdown', onDown);
      document.documentElement.addEventListener('mouseleave', onLeave);
    }

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
