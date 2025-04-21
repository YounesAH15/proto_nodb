<script lang="ts">
    import { onMount } from 'svelte';
    
    export let videoSrc: string;
    export let open: boolean;
    export let onClose: () => void;
  
    let videoElement: HTMLVideoElement;
  
    // Pause video on close
    $: if (!open && videoElement) {
      videoElement.pause();
    }
  </script>
  
  {#if open}
    <div class=" inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="relative w-full max-w-3xl mx-4">
        <button
          class="absolute top-2 right-2 text-white text-2xl hover:text-red-400"
          on:click={onClose}
        >
          &times;
        </button>
          
        <video
            bind:this={videoElement}
            controls={true}
            preload="none"
            poster="src\static\images\explainer-thumbnail.jpg"
            muted={false}
            class="rounded-xl shadow-lg w-3/5 h-3/5 max-w-4/5 max-h-4/5 mx-auto"
            src={videoSrc}
            >
            Your browser does not support the video tag.
        </video>
      </div>
    </div>
  {/if}
  