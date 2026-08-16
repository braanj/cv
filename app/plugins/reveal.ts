/**
 * v-reveal — fades/slides an element in once it enters the viewport.
 * Usage: <section v-reveal> or <section v-reveal="120"> (120ms stagger delay)
 * Skips the animation entirely for prefers-reduced-motion.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("reveal", {
    mounted(el: HTMLElement, binding) {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) return;

      const delay = typeof binding.value === "number" ? binding.value : 0;
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add("reveal");

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            el.classList.add("reveal-visible");
            observer.unobserve(el);
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
      );

      observer.observe(el);
    },
  });
});
