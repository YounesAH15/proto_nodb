<script lang="ts">
	import { goto } from '$app/navigation';
    import { alreadyPlayed, gameStore } from '$lib/stores/game-store';
    let oath = $gameStore.choicesMade.oath;
    
</script>

<div class="min-h-screen-4/5 bg-black text-white flex flex-col items-center justify-center p-8">
<h1 class="text-3xl font-bold mb-4">Credits</h1>
<p class="mb-2">Game Design & Development: You</p>
<p class="mb-2">Art & Icons: cc0 from Game Icons</p>
<p class="mb-2">Music: Medieval Ambience by You</p>

{#if oath === 'protect'}
    <div class="mt-6 bg-yellow-800 p-4 rounded">
    <h2 class="text-2xl mb-2">Special Invitation</h2>
    <p>Congratulations, noble protector! Visit our historic reenactment event:</p>
    <a href="https://example.com/real-life-quest" class="underline mt-2">Come play in real life</a>
    </div>
{/if}

<button on:click={() => {alreadyPlayed.set(true); goto("/");}} class="mt-8 bg-gray-600 px-6 py-2 rounded text-white">Return to Main Menu</button>
</div>