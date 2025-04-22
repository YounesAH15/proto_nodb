<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    export let videoSrc: string;
    export let open: boolean;
    export let onClose: () => void;
  
    let videoElement: HTMLVideoElement;
  
    // Pause video on close
    $: if (!open && videoElement) {
      videoElement.pause();
    }
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
        onClose();
        }
    }
  </script>

<svelte:window on:keydown={handleKeydown} />
  {#if open}
    <div transition:fade class="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="relative w-full h-full max-w-3xl mx-4">
        <button
          class="absolute top-2 right-2   "
          on:click={onClose}
        >
            <span id="closeBtn" class="text-red text-5xl hover:text-red-400">
                &times;
            </span>  
        </button>
          
        <video
            bind:this={videoElement}
            controls={true}
            preload='metadata'
            
            poster="src\static\images\explainer-thumbnail.jpg"
            muted={false}
            class="rounded-xl shadow-lg w-4/5 h-4/5 max-w-4/5 max-h-4/5 mx-auto"
            src={videoSrc}
            >
            Your browser does not support the video tag.
        </video>
      </div>
    </div>
  {/if}
  

  <style>
    #closeBtn {
        color:red;
    }
  </style>