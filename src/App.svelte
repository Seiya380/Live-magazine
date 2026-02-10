<script>
  import PageShell from './lib/components/PageShell.svelte';
  import Navigation from './lib/components/Navigation.svelte';
  import { useMagazine } from './lib/state.svelte.js';

  const mag = useMagazine();
</script>

<div
  class="magazine"
  style="background-color: {mag.currentPage.meta?.background ?? '#1a1a1c'}"
>
  <PageShell />
  <Navigation />
</div>

<style>
  .magazine {
    position: fixed;
    inset: 0;
    transition: background-color 0.8s ease;
  }
</style>
