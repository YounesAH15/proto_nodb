<script lang="ts">
    import { gameStore } from '$lib/stores/game-store';
  </script>
  
  <div class="p-4">
    <h2 class="text-sm font-bold mb-1 text-amber-400">Inventory</h2>
    <ul class="text-xs  ml-4">
      {#each $gameStore.inventory as item}
        <li>{item}</li>
      {/each}
      {#if $gameStore.inventory.length === 0}
        <li class="italic">Empty</li>
      {/if}
    </ul>
  </div>
  