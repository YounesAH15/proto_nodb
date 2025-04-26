<script lang="ts">
    import { advanceChapter, gameStore, solvePuzzle } from '$lib/stores/game-store';
    import { goto } from '$app/navigation';
  
    const correctPath = ['crescent', 'star', 'cross'];
    let selected: string[] = [];
    let solved = false;
    let error = false;
    let success = false;
    
    function select(symbol: string) {
        console.log({solved});
        
        if (solved || selected.length >= 3) return;
        if(!selected.includes(symbol)) selected.push(symbol);
        selected = selected;
        console.log(selected);
            
        if (selected.length === 3) {
            if (JSON.stringify(selected) === JSON.stringify(correctPath)) {
                advanceChapter('chapter-4');
                solvePuzzle('symbol-route');
                solved = true;
                success = true
                setTimeout(() => goto('/scene/chapter-4'), 5000);
            } else {
                error = true;
                setTimeout(() => {
                    selected = [];
                    error = false;
                }, 1000);
            }
        }
    }

    $: selected;
</script>
  
<h1 class="text-xl font-bold mb-4">Chapter 3: Passage Through the Holy Land</h1>

<p class="mb-4">
    To reach Jerusalem safely, you must travel the path guided by sacred symbols.
    Choose wisely.
</p>

<div class="flex justify-center">
    <img src="/img/map-holyland.jpg" alt="Holy Land Map" class="mb-4 border rounded w-1/2 justify-center" />
</div>
  
<div class="flex gap-4 justify-center">
    {#each ['crescent', 'star', 'cross', 'sun'] as symbol}
        
        {#if solved && selected.includes(symbol)}
            <button
            class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded border border-green"
            on:click={() => select(symbol)}
            disabled={solved}
            >
            {symbol}
            </button>
        {:else if !solved && selected.includes(symbol) && !error}
            <button
            class="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded border border-green"
            on:click={() => select(symbol)}
            disabled={solved}
            >
            {symbol}
            </button>
        {:else if !solved && selected.includes(symbol) && error}
            <button
            class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded border border-green"
            on:click={() => select(symbol)}
            disabled={solved}
            >
            {symbol}
            </button>
        {:else}
            <button
            class="hover:bg-amber-500 px-4 py-2 rounded border border-white"
            on:click={() => select(symbol)}
            disabled={solved}
            >
            {symbol}
            </button>
        {/if}

    {/each}
</div>
{#if error}
    <p class="text-red-400 mt-4 italic">Incorrect path. Try again.</p>
{/if}

{#if success}
    <p class="text-green-400 mt-4 italic">You've found the Path to Wisdom. Go Ahead !</p>
{/if}
  