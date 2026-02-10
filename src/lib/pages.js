import Page00Cover from './pages/Page00Cover.svelte';
import Page01Intro from './pages/Page01Intro.svelte';
import Page02Sketch from './pages/Page02Sketch.svelte';

/** @type {Array<{id: string, title: string, component: any, transition?: string, meta?: {background?: string}}>} */
export const pages = [
  {
    id: 'cover',
    title: 'Couverture',
    component: Page00Cover,
    transition: 'fade',
    meta: { background: '#1a1a1c' },
  },
  {
    id: 'intro',
    title: 'Introduction',
    component: Page01Intro,
    transition: 'slide-scale',
    meta: { background: '#1a1a1c' },
  },
  {
    id: 'sketch',
    title: 'Esquisse',
    component: Page02Sketch,
    transition: 'zoom-blackout',
    meta: { background: '#1a1a1c' },
  },
];
