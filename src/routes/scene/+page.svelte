<script lang="ts">
	import { goto } from "$app/navigation";


	import Chapter_1 from "./chapter-1.svelte";

</script>
<div class="scene h-screen-3/5 flex-col justify-center bg-amber/50 py-5 rounded-2xl">

    <button on:click={()=>goto("/scene/chapter-1")} class="m-2 text-white px-4 py-2 rounded-xl">
        <h1>
            Start Your Journey
        </h1>
    </button>
    
</div>

<style>
    button {
        background-color: goldenrod;
    }
</style>