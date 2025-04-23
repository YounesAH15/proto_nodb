<script lang="ts">
    import { gameStore } from '$lib/stores/game-store';
  </script>
  
  <div class="p-4">
    <h2 class="text-sm font-bold mb-1 text-amber-400">Clues</h2>
    <ul class="text-xs  ml-4">
      {#each $gameStore.puzzlesSolved as item}
        <li>{item}</li>
      {/each}
      {#if $gameStore.puzzlesSolved.length === 0}
        <li class="italic">Empty</li>
      {/if}
    </ul>
  </div>
  