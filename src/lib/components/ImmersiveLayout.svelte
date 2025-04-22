<script lang="ts">
    import MusicToggle from './MusicToggle.svelte';
    import InventoryPreview from './InventoryPreview.svelte';
    import { gameStore } from '$lib/stores/game-store';
  
    export let title: string = '';
  </script>
  
  <div class="relative min-h-screen bg-cover bg-center text-white" style="background-image: url('/img/bg-medieval.jpg');">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
  
    <!-- HUD -->
    <div class="relative z-10 p-4 flex justify-between items-start">
      <div>
        <h1 class="text-xl font-bold mb-2">{title}</h1>
        <InventoryPreview />
      </div>
      <MusicToggle />
    </div>
  
    <!-- Chapter Content -->
    <main class="relative z-10 p-8">
      <slot />
    </main>
  </div>
  