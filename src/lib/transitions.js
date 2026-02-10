export const transitions = {
  fade: {
    duration: 600,
    easing: 'ease-in-out',
    outgoing: {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
    incoming: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  },

  'slide-scale': {
    duration: 800,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    outgoing: (dir) => ({
      from: { opacity: 1, transform: 'translateX(0) scale(1)' },
      to: { opacity: 0, transform: `translateX(${dir === 1 ? '-100vw' : '100vw'}) scale(0.85)` },
    }),
    incoming: (dir) => ({
      from: { opacity: 0, transform: `translateX(${dir === 1 ? '100vw' : '-100vw'}) scale(0.85)` },
      to: { opacity: 1, transform: 'translateX(0) scale(1)' },
    }),
  },

  parallax: {
    duration: 1000,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    outgoing: (dir) => ({
      from: { opacity: 1, transform: 'translateX(0)' },
      to: { opacity: 0, transform: `translateX(${dir === 1 ? '-50vw' : '50vw'})` },
    }),
    incoming: (dir) => ({
      from: { opacity: 0, transform: `translateX(${dir === 1 ? '100vw' : '-100vw'})` },
      to: { opacity: 1, transform: 'translateX(0)' },
    }),
  },

  'zoom-rotate': {
    duration: 900,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    outgoing: {
      from: { opacity: 1, transform: 'scale(1) rotate(0deg)' },
      to: { opacity: 0, transform: 'scale(1.3) rotate(2deg)' },
    },
    incoming: {
      from: { opacity: 0, transform: 'scale(0.7) rotate(-2deg)' },
      to: { opacity: 1, transform: 'scale(1) rotate(0deg)' },
    },
  },

  // Zooms into the head area, black flash, then new page emerges from darkness
  'zoom-blackout': {
    sequenced: true,
    transformOrigin: '50% 30%', // center of the head in the edito image
    outDuration: 1200,
    blackDuration: 400,
    inDuration: 1000,
    outgoing: {
      from: { opacity: 1, transform: 'scale(1)' },
      to: { opacity: 0, transform: 'scale(5)' },
    },
    incoming: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  },
};

/**
 * Resolve a transition's keyframes, handling both static objects and direction-aware functions.
 */
export function resolveKeyframes(config, phase, direction) {
  const def = config[phase];
  if (typeof def === 'function') {
    return def(direction);
  }
  return def;
}
