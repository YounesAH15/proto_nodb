<script lang="ts">
    import Chapter1 from '../chapter-1.svelte';
    import Chapter2 from '../chapter-2.svelte';
    import { page } from '$app/state';
  
    $: scene = page.params.id;
</script>
  
  {#if scene === 'chapter-1'}
    <Chapter1 />
  {:else if scene === 'chapter-2'}
    <Chapter2 />
  {:else}
    <p>Scene not found</p>
  {/if}
  