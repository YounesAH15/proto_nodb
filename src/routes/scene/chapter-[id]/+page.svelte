<script lang="ts">
  import Chapter1 from '../chapter-1.svelte';
  import Chapter2 from '../chapter-2.svelte';
  import { page } from '$app/state';
  import Chapter3 from '../chapter-3.svelte';

  $: scene = 'chapter-'+page.params.id;

</script>
  
<div class="scene h-screen-3/5 flex-col justify-center border-2 bg-amber-300/70 text-black p-5 w-screen-4/5 m-auto">
  {#if scene === 'chapter-1'}
    <Chapter1 />
  {:else if scene === 'chapter-2'}
    <Chapter2 />
  {:else if scene === 'chapter-3'}
    <Chapter3 />
  {:else}
    <p>Scene not found</p>
  {/if}
  
</div>

<style>
  .scene {
    font-size: 1.5rem;
  }
</style>