<script lang="ts">
    import { advanceChapter, gameStore } from '$lib/stores/game-store';
    import { goto } from '$app/navigation';
    const unsubscribe = gameStore.subscribe(state => {});
  
    $: oath = $gameStore.choicesMade.oath;
    $: hasKey = $gameStore.inventory.includes('temple-key');
    let message = '';
  
    function finishGame() {
      if (oath === 'protect') {
        message = 'You lead the child safely to Jerusalem. Your honor is immortalized.';
      } else {
        message = 'You reach Jerusalem alone, your resolve hardened but with heavy heart.';
      }
      gameStore.update(state => ({ ...state, currentScene: 'chapter-end' }));
      advanceChapter("chapter-end")
      unsubscribe();
    }
  </script>
  
  <h1 class="text-2xl font-bold mb-4">Chapter 7: Rise of the Knight</h1>
  
  {#if hasKey}
    <p class="mb-4">With the Temple Key in hand, you approach the gates of Jerusalem.</p>
    <p class="mb-4">
      {#if oath === 'protect'}
        You sworn to protect the orphan. You carry them with you as your liege’s charge.
      {:else}
        You left the orphan behind. The road was yours alone, but your conscience bears the weight.
      {/if}
    </p>
  
    <button on:click={finishGame} class="bg-blue-600 text-white px-4 py-2 rounded">Claim Your Knighthood</button>
    {#if message}<p class="mt-4 italic">{message}</p>{/if}
  {:else}
    <p>You need the temple key from Chapter 4 to complete your journey.</p>
  {/if}