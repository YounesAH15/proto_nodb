<script lang="ts">
  import MusicToggle from './MusicToggle.svelte';
  import InventoryPreview from './InventoryPreview.svelte';
	import CluesPreview from './CluesPreview.svelte';
	import QuestsPreview from './QuestsPreview.svelte';
  import { loadGame, newGame } from '$lib/stores/game-store';
	import ChoicesMade from './ChoicesMade.svelte';

  export let title: string = '';


  </script>
  
  <div class="fixed min-h-screen max-h-screen min-w-screen bg-cover bg-center text-white flex flex-col justify-between" style="background-image: url('/img/bg-medieval.jpg');">
    <!-- Overlay -->
    <!-- <div class="absolute inset-0  z-0"></div> -->
  
    <!-- HUD -->
    <div class="min-w-full z-10 p-4 flex justify-between items-start top-0">
      <div class="flex justify-between w-full">
        <h1 class="text-xl font-bold mb-2 h-fit border-2 border-black text-black bg-amber-50 w-fit px-4">{title}</h1>
        <div class="flex bg-amber-950/55 border-2 border-amber-50 p-0">
          <!-- <QuestsPreview /> -->
          <InventoryPreview />
          <CluesPreview />
          <ChoicesMade />
        </div>
        <MusicToggle />
      </div>

    </div>
  
    <!-- Chapter Content -->
    <main class="m-auto relative pt-0 z-20 p-8">
      <slot />
    </main>

    <div class="bg-amber-950/50 p-0 rounded shadow-xl bottom-0">

      <div class="flex gap-4 justify-evenly px-4">
        <button on:click={newGame} class="bg-green-600/75 hover:bg-green-400 px-6 py-2 rounded h-4/5 my-auto">
          🛡️ New Game
        </button>
        <div>
          <h1 class="text-5xl font-bold my-3">Kingdom of Heaven</h1>
          <p class="mb-8">A medieval escape adventure through the Crusades</p>
        </div>
        <button on:click={loadGame} class="bg-blue-600/75 hover:bg-blue-400 px-6 py-2 rounded h-4/5 my-auto">
          🔄 Load Game
        </button>
      </div>
    </div>
  </div>
  