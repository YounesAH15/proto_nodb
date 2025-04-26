<script lang="ts">
    import { advanceChapter, gameStore } from '$lib/stores/game-store';
    let oath = $gameStore.choicesMade.oath;

    const Credits = () => {
        advanceChapter("chapter-credits")
    }
</script>
<!-- bg-[url('/img/bg-medieval.jpg')] -->
<div class="min-h-screen-4/5  bg-cover bg-amber-700/75 text-black flex flex-col items-center justify-center p-8">

<h1 class="text-4xl font-bold mb-4">The End</h1>
{#if oath === 'protect'}
    <p class="mb-6">Your honor shines bright — you’re remembered as a true knight.</p>
    <p class="mb-6">Thank you for your noble deeds.</p>
    <button on:click={Credits} class="bg-green-600 px-6 py-2 rounded text-white">See Credits</button>
{:else}
    <p class="mb-6">You achieved knighthood, but at a cost. Reflect on your choices.</p>
    <button on:click={Credits} class="bg-blue-600 px-6 py-2 rounded text-white">See Credits</button>
{/if}
</div>