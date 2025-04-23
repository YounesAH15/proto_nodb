<script lang="ts">
    import { gameStore } from '$lib/stores/game-store';
  </script>
  
  <div class="p-4">
    <h2 class="text-sm font-bold mb-1 text-amber-400">Your Quest</h2>
    <ul class="text-xs  ml-4">
        <li>
          {$gameStore.currentScene}
        </li>
    </ul>
  </div>
  