<script lang="ts">
    import { musicEnabled } from '$lib/stores/game-store';
    let audioRef: HTMLAudioElement;
  
    $: if (audioRef) {
      musicEnabled ? audioRef.play() : audioRef.pause();
    }
  </script>
  
  <button on:click={() => musicEnabled.update((m:Boolean) => !m)} class="text-white bg-black/50 px-3 py-1 rounded">
    🎶 { $musicEnabled ? 'On' : 'Off' }
  </button>
  
  <audio bind:this={audioRef} src="/audio/ambient.mp3" loop autoplay ></audio>
  