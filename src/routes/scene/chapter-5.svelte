<script lang="ts">
    import { advanceChapter, gameStore } from '$lib/stores/game-store';
    import { goto } from '$app/navigation';
    import OathSeal from '$lib/icons/OathSeal.svelte';
  
    const hasSeal = $gameStore.inventory.includes('oath-seal');
    let choice = '';
    let message = '';
  
    function attendCouncil(selection: 'honor' | 'power') {
      if (!hasSeal) return;
      gameStore.update(state => ({
        ...state,
        choicesMade: { ...state.choicesMade, council: selection },
        inventory: [...state.inventory.filter(i => i !== 'oath-seal'), 'council-approval'],
        currentScene: 'chapter-6'
      }));
      message = `You chose ${selection}. You receive the council's approval.`;
      advanceChapter("chapter-6")
    }
  </script>
  
  <h1 class="text-2xl font-bold mb-4">Chapter 5: The Council of Jerusalem</h1>
  
  {#if hasSeal}
    <OathSeal className="w-12 h-12 mb-4" />
    <p class="mb-4">With your Oath Seal, you gain entry to the secret council.</p>
    <p class="mb-4">Which path will you support?</p>
    <div class="flex gap-4">
      <button on:click={() => attendCouncil('honor')} class="bg-green-600 text-white px-4 py-2 rounded">Put Honor First</button>
      <button on:click={() => attendCouncil('power')} class="bg-gray-600 text-white px-4 py-2 rounded">Seek Power</button>
    </div>
    {#if message}<p class="mt-4 italic">{message}</p>{/if}
  {:else}
    <p>You need the Oath Seal from Chapter 2 to enter the council.</p>
  {/if}
  