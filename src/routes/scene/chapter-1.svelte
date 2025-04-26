<!-- Blacksmith's Secret -->

<!-- Chapter 1: The Blacksmith’s Secret, which introduces the setting, includes a discovery puzzle, and ends with a key item or password that unlocks Chapter 2. -->

<script lang="ts">
    import { addItem, advanceChapter, gameStore, solvePuzzle } from '$lib/stores/game-store';

    import { goto } from '$app/navigation';

    $: if ($gameStore.currentScene !== 'chapter-1') {
        goto(`/scene/${$gameStore.currentScene}`);
    }

    let answer = '';
    let message = '';
    let tries = 9;
    let Answer: string[] = ['J','E','R','U','S','A','L','E','M'];
    let clue: string[] = [];
    $: clue;
    $: answer;
    function checkAnswer() {
      if (answer.trim().toLowerCase() === 'jerusalem') {
        solvePuzzle('blacksmith-scroll');
        addItem('templar-scroll');
        advanceChapter("chapter-2");
        message = 'Correct. You found the Templar’s scroll. Chapter 2 unlocked.';
      } else {
        message = 'That’s not quite right…';
        tries--;
        let nextClue: string | undefined = Answer.pop();
        if(nextClue) {
          clue.reverse()
          clue.push(nextClue);
          clue=[...clue.reverse()];
        }
        answer = ""
        console.log({clue});
        
      }
    }
  </script>
  
  <h1 class="text-2xl font-bold mb-4">Chapter 1: The Blacksmith’s Secret</h1>
  <p class="mb-4">You discover an old scroll hidden beneath the forge. It bears the riddle:</p>
  
  <blockquote class="italic mb-4">
    “Where do kings fall, and crusaders rise?  
    A city of dust, faith, and cries.”
  </blockquote>
  

  


  {#if tries>=0}
    {#if tries!=9}
      Tries left {tries}
      <br>
      Here's a Clue 
      <br>
      <h1 class="text-amber-50">
        {clue.join('')}
      </h1>
    {/if}


    <br><hr>
    <input
      bind:value={answer}
      placeholder="Remember..."
      class="border-2 p-2 rounded-xl text-amber-600 border-amber-500 focus:border-amber-700 focus:box-shadow-0"
    />
  
    <button on:click={checkAnswer} class=" bg-amber-600 hover:bg-amber-500 border-2 border-amber-50 text-white p-2 text-lg rounded h-full">
      Answer
    </button>

    {#if message.includes("Correct")}
      <p class="mt-4 text-green-500">{message}</p>
    {:else}
      <p class="mt-4 text-red-500">{message}</p>
    {/if}
  {/if}
  