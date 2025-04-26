<script lang="ts">
	// import ExplainerVideo from "../lib/components/ExplainerVideo.svelte";
	import VideoModal from "../lib/components/VideoModal.svelte";
    import myVideo from '$lib/assets/videos/chess_anime_player.mp4';
	import { alreadyPlayed, newGame } from "$lib/stores/game-store";

    let isOpen = true

</script>
<section class="m-auto h-screen flex flex-col justify-evenly text-3xl">

    <div>
        <h1 class="text-5xl">
            🛡️ Concept: "The Path to the Cross"
        </h1>
    </div>

    <div>
        <h3>
            Genre: Medieval escape adventure
            <br>
            Theme: Honor, transformation, moral dilemmas, cryptic codes, knightly virtues
            <br>
            Player Role: A blacksmith’s apprentice (servant) whose fate changes after a mysterious knight’s death...
        </h3>
    </div>
    <section>
        <h1>Ready to Journey ? </h1>
        <button on:click={newGame} class="m-auto mt-8 p-4 rounded-2xl bg-lime-500">
            START
        </button>
    </section>
    
</section>

<!-- <section>
    Auth forms, lucia or oauth2 using google
     <h1>AUTH
        THEN
     </h1>
</section> -->

{#if $alreadyPlayed.valueOf()}
    <!-- Congratulations from Game Master Video  -->
    <VideoModal 
        videoSrc={myVideo}
        open={isOpen}
        onClose={()=>{isOpen = false}}>
    </VideoModal>
{:else}
    <!-- Explanation from Game Master Video  -->
    <VideoModal 
        videoSrc={myVideo}
        open={isOpen}
        onClose={()=>{isOpen = false}}>
    </VideoModal>
{/if}


