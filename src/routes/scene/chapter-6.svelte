<script lang="ts">
    import { advanceChapter, gameStore } from '$lib/stores/game-store';
    import { goto } from '$app/navigation';
    import Torch from '$lib/icons/Torch.svelte';
    import { onMount } from 'svelte';
  
    const hasTorch = $gameStore.inventory.includes('torch');
    let timer = 30;
    let interval: number | undefined;
    let answer = '';
    let message = '';
  
    function startTimer() {
      interval = setInterval(() => {
        timer -= 1;
        if (timer <= 0) {
          clearInterval(interval);
          message = 'Time up! You failed the Trial.';
        }
      }, 1000);
    }
  
    function solveTrial() {
      if (!hasTorch) return;
      if (answer.trim().toLowerCase() === 'honor') {
        clearInterval(interval);
        gameStore.update(state => ({
          ...state,
          puzzlesSolved: [...state.puzzlesSolved, 'trial-of-honor'],
          inventory: [...state.inventory, 'honor-symbol'],
          currentScene: 'chapter-7'
        }));
        message = 'Well done! You proved your honor.';
        advanceChapter('chapter-7')
      } else {
        message = 'Incorrect. Think of what guides a true knight.';
      }
    }
  
    onMount(() => {
      if (hasTorch) startTimer();
    });
  </script>
  
  <h1 class="text-2xl font-bold mb-4">Chapter 6: The Trial of Honor</h1>
  
  {#if hasTorch}
    <Torch className="w-12 h-12 mb-4" />
    <p class="mb-2">Light your torch to see the hidden inscription before time runs out.</p>
    <p class="mb-4">Time Remaining: {timer}s</p>
  
    <input bind:value={answer} placeholder="Enter the virtue" class="border p-2 rounded" disabled={false} />
    <button on:click={solveTrial} class="ml-2 bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    {#if message}<p class="mt-4 italic">{message}</p>{/if}
  {:else}
    <p>You need a torch from Chapter 4 to light the chamber.</p>
  {/if}