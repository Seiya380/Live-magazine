import { pages } from './pages.js';

let currentIndex = $state(0);
let direction = $state(1);
let isTransitioning = $state(false);

export function useMagazine() {
  return {
    get currentIndex() { return currentIndex; },
    get currentPage() { return pages[currentIndex]; },
    get direction() { return direction; },
    get isTransitioning() { return isTransitioning; },
    get totalPages() { return pages.length; },
    get isFirst() { return currentIndex === 0; },
    get isLast() { return currentIndex === pages.length - 1; },
    get progress() { return pages.length > 1 ? currentIndex / (pages.length - 1) : 0; },

    goTo(index) {
      if (isTransitioning) return;
      if (index < 0 || index >= pages.length) return;
      if (index === currentIndex) return;
      direction = index > currentIndex ? 1 : -1;
      isTransitioning = true;
      currentIndex = index;
    },

    next() {
      this.goTo(currentIndex + 1);
    },

    prev() {
      this.goTo(currentIndex - 1);
    },

    transitionEnd() {
      isTransitioning = false;
    },
  };
}
