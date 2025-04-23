<!-- The Oath (placeholder for now) -->

<!-- 
🧩 Chapter 2 – "The Oath"
Theme: Moral choice — you must swear to protect someone, or leave them behind.
We'll include two choices, both recorded in the choicesMade store. Your choice affects your ending later.
 -->

 <script lang="ts">
    import { advanceChapter, gameStore, makeChoice } from '$lib/stores/game-store';
  
    let message = '';
    let chosen = false;
  
    function Choose(choice: string) {
      makeChoice("oath",choice)

      message = `You chose: ${choice}`;
      chosen = true;
      advanceChapter("chapter-3");
    }
  </script>
  
  <h1 class="text-2xl font-bold mb-4">Chapter 2: The Oath</h1>
  
  <p class="mb-4">
    As you prepare to leave the city, a young orphan grabs your arm.
    <em>“Will you protect me on this journey?”</em>
  </p>
  
  <p class="mb-4">
    You must decide: swear to protect the child, or leave them to fate.
  </p>
  
  <div class="flex gap-4 w-full justify-around">

    <button
      on:click={() => Choose('leave')}
      class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
      disabled={chosen}
    >
      Leave them
    </button>

    <button
      on:click={() => Choose('protect')}
      class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      disabled={chosen}
    >
      Swear to protect
    </button>
  

  </div>
  
  {#if message}
    <p class="mt-4 italic">{message}</p>
  {/if}
  