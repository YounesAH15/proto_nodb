<script lang="ts">
    import { gameStore } from '$lib/stores/game-store';
	import { json } from '@sveltejs/kit';
  </script>
  
  <div class="p-4">
    <h2 class="text-sm font-bold mb-1 text-amber-400">Choices</h2>
    <ul class="text-xs  ml-4">
      {#each Object.entries($gameStore.choicesMade) as [key, value]}
        <li><strong>{key}:</strong> {JSON.stringify(value)}</li>
      {/each}
    </ul>
  </div>
  