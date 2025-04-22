<!-- Blacksmith's Secret -->

<!-- Chapter 1: The Blacksmith’s Secret, which introduces the setting, includes a discovery puzzle, and ends with a key item or password that unlocks Chapter 2. -->

<script lang="ts">
    import { gameStore } from '$lib/stores/game-store';

    import { goto } from '$app/navigation';

    $: if ($gameStore.currentScene !== 'chapter-1') {
        goto(`/scene/${$gameStore.currentScene}`);
    }

    let answer = '';
    let message = '';
    
    function checkAnswer() {
      if (answer.trim().toLowerCase() === 'jerusalem') {
        gameStore.update((state) => ({
          ...state,
          puzzlesSolved: [...state.puzzlesSolved, 'blacksmith-scroll'],
          inventory: [...state.inventory, 'templar-ring'],
          currentScene: 'chapter-2'
        }));
        message = 'Correct. You found the Templar’s ring. Chapter 2 unlocked.';
      } else {
        message = 'That’s not quite right…';
      }
    }
  </script>
  
  <h1 class="text-2xl font-bold mb-4">Chapter 1: The Blacksmith’s Secret</h1>
  <p class="mb-4">You discover an old scroll hidden beneath the forge. It bears the riddle:</p>
  
  <blockquote class="italic mb-4">
    “Where do kings fall, and crusaders rise?  
    A city of dust, faith, and cries.”
  </blockquote>
  
  <input
    bind:value={answer}
    placeholder="Type your answer..."
    class="border p-2 rounded"
  />
  
  <button on:click={checkAnswer} class="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
    Submit
  </button>
  
  {#if message}
    <p class="mt-4">{message}</p>
  {/if}
  