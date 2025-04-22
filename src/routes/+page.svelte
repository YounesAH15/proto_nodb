<script lang="ts">
	// import ExplainerVideo from "../lib/components/ExplainerVideo.svelte";
	import VideoModal from "../lib/components/VideoModal.svelte";
    import myVideo from '$lib/assets/videos/chess_anime_player.mp4';

    let explainerIsOpen = true
</script>
<section>

    <h1>
        🛡️ Concept: "The Path to the Cross"
    </h1>
    <h3>
        Genre: Medieval escape adventure
        <br>
        Theme: Honor, transformation, moral dilemmas, cryptic codes, knightly virtues
        <br>
        Player Role: A blacksmith’s apprentice (servant) whose fate changes after a mysterious knight’s death...
    </h3>
</section>

<section>
    <!-- Auth forms, lucia or oauth2 using google -->
     <h1>AUTH
        THEN
     </h1>
</section>

<section>
    <!-- Just an Explanation For the Game, through a video or a text -->
     <h1>Explainer</h1>
    <VideoModal videoSrc={myVideo} open={explainerIsOpen} onClose={()=>{explainerIsOpen=false}}></VideoModal>
</section>

<section>
    <h1>Ready to Start ? </h1>
    <button><a href="/scene/1">START</a></button>
</section>

<section>
    <!-- In layout or main Game UI -->
<!-- 
    {#if $currentScene === 'chapter-1'}
    <Chapter1 />
    {:else if $currentScene === 'chapter-2'}
    <Chapter2 />
    {/if}
     -->

</section>