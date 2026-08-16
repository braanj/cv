export function useCountUp(
  target: number,
  options: { duration?: number; decimals?: number } = {},
) {
  const { duration = 1200, decimals = 0 } = options;
  const value = ref(0);
  let started = false;

  const start = () => {
    if (started) return;
    started = true;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      value.value = target;
      return;
    }

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      value.value = Number((target * eased).toFixed(decimals));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  return { value, start };
}
