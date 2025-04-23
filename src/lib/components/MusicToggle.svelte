<script lang="ts">
	import MusicNoteIcon from '$lib/assets/component-specifi-SVGs/MusicNoteIcon.svelte';
  import { musicEnabled } from '$lib/stores/game-store';
	import { onMount } from 'svelte';
  let audioRef: HTMLAudioElement;

  $: if (audioRef) {
    musicEnabled ? audioRef.play() : audioRef.pause();
  }

  $: $musicEnabled ? audioRef?.play() : audioRef?.pause();

  onMount(() => {
    audioRef.volume = 1; // Optional
  });
</script>
  
  <button on:click={() => musicEnabled.update((m:Boolean) => !m)} class="bg-amber-950/20 px-2 py-2 rounded flex text-center border-2 border-amber-50">
    <MusicNoteIcon classes="w-8 h-8" color="black" /> { $musicEnabled ? 'On' :  'Off'  }
  </button>
  
  <audio bind:this={audioRef} src="/audio/ambient.mp3" loop autoplay preload="auto"></audio>
  