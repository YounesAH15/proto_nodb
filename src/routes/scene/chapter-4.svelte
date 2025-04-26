<script lang="ts">
    import { advanceChapter, gameStore } from '$lib/stores/game-store';
    import { goto } from '$app/navigation';
    import TemplarScroll from '$lib/icons/TemplarScroll.svelte';
  
    // Only proceed if player has the scroll
    const hasScroll = $gameStore.inventory.includes('templar-scroll');
    let input = '';
    let message = '';
  
    function decode() {
      if (!hasScroll) return;
  
      const decoded = input.trim().toLowerCase();
      if (decoded === 'faith') {
        gameStore.update(state => ({
          ...state,
          puzzlesSolved: [...state.puzzlesSolved, 'templar-cipher'],
          inventory: [...state.inventory, 'temple-key', 'torch'],
          currentScene: 'chapter-5'
        }));
        message = 'Decoded! You found the temple key and a torch.';
        advanceChapter('chapter-5')
      } else {
        message = 'Incorrect. Use the scroll to guide your decoding.';
      }
    }
  </script>
  
  <h1 class="text-2xl font-bold mb-4">Chapter 4: Test of the Templar</h1>
  
  {#if hasScroll}
    <TemplarScroll className="w-12 h-12 mb-4" />
    <p class="mb-4">Use your Templar Scroll to decode the secret word.</p>
    <input bind:value={input} placeholder="Enter decoded word" class="border p-2 rounded" />
    <button on:click={decode} class="ml-2 bg-blue-600 text-white px-4 py-2 rounded">Decode</button>
    {#if message}<p class="mt-4">{message}</p>{/if}
  {:else}
    <p>You need the Templar Scroll from Chapter 1 to proceed.</p>
  {/if}