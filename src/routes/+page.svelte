<script lang="ts">
	import ExplainerVideo from "../components/ExplainerVideo.svelte";
	import VideoModal from "../components/VideoModal.svelte";
    import myVideo from '$lib/assets/videos/chess_anime_player.mp4';

    let explainerSrc = ""
</script>
<section>

    <h1>VEGE</h1>
    <h1>Virtual Escape Game Experience</h1>
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
    <VideoModal videoSrc={myVideo} open={true} onClose={()=>{}}></VideoModal>
</section>

<section>
    <h1>Ready to Start ? </h1>
    
</section>

