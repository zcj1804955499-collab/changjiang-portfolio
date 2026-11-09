import { useLayoutEffect } from 'react';

// 网格 / 纵向列表容器本身不做动效，改为让它们的子元素逐个出现
const SPLIT = '.grid, .space-y-6, .space-y-8';

const expand = (el: Element, out: HTMLElement[]) => {
  if (el.matches(SPLIT) && el.children.length) {
    Array.from(el.children).forEach((child) => expand(child, out));
  } else {
    out.push(el as HTMLElement);
  }
};

const collectTargets = () => {
  const found: HTMLElement[] = [];
  document.querySelectorAll('main section').forEach((section) => {
    Array.from(section.children).forEach((child) => expand(child, found));
  });
  // 时间线里的每个节点单独出现
  document.querySelectorAll('main .relative.z-10.space-y-6 > *').forEach((el) => found.push(el as HTMLElement));
  return Array.from(new Set(found));
};

/** 滚动到视口内时，让新出现的元素自下而上淡入；同一容器内的元素依次错开。 */
export const useScrollReveal = (routeKey: string) => {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const targets = collectTargets();
    const siblingCount = new Map<Element | null, number>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    );

    targets.forEach((el) => {
      const index = siblingCount.get(el.parentElement) ?? 0;
      siblingCount.set(el.parentElement, index + 1);
      el.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 100}ms`);
      el.setAttribute('data-reveal', '');
      io.observe(el);
    });

    return () => {
      io.disconnect();
      targets.forEach((el) => {
        el.removeAttribute('data-reveal');
        el.classList.remove('is-revealed');
        el.style.removeProperty('--reveal-delay');
      });
    };
  }, [routeKey]);
};
