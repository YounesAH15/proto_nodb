<script lang="ts">
  import { page } from '$app/state'; 
  import Chapter1 from '../chapter-1.svelte';
  import Chapter2 from '../chapter-2.svelte';
  import Chapter3 from '../chapter-3.svelte';
  import Chapter4 from '../chapter-4.svelte';
	import Chapter5 from '../chapter-5.svelte';
	import Chapter6 from '../chapter-6.svelte';
  import Chapter7 from '../chapter-7.svelte';
	import Credits from '../credits.svelte';
	import End from '../end.svelte';


  $: scene = 'chapter-'+page.params.id;

</script>
  
<div class="scene h-screen-3/5 flex-col justify-center border-2 bg-amber-300/70 text-black p-5 w-screen-4/5 m-auto">
  {#if scene === 'chapter-1'}
    <Chapter1 />
  {:else if scene === 'chapter-2'}
    <Chapter2 />
  {:else if scene === 'chapter-3'}
    <Chapter3 />
  {:else if scene === 'chapter-4'}
    <Chapter4 />
  {:else if scene === 'chapter-5'}
    <Chapter5 />
  {:else if scene === 'chapter-6'}
    <Chapter6 />
  {:else if scene === 'chapter-7'}
    <Chapter7 />
  {:else if scene === 'chapter-end'}
    <End />
  {:else if scene === 'chapter-credits'}
    <Credits />
  {:else}
    <p>Scene not found</p>
  {/if}
  
</div>

<style lang="css">
  .scene {
    font-size: 1.5rem;
  }
</style>