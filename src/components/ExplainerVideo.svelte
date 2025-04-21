<!-- src/lib/components/ExplainerVideo.svelte -->
<!-- svelte-ignore element_invalid_self_closing_tag -->

<script lang="ts">
    // import myVideo from '$lib/assets/my-video.mp4';
    import myVideo from '$lib/assets/videos/chess_anime_player.mp4';
    // /videos/chess_anime_player.mp4
  </script>
  

<video
  controls={true}
  preload=""
  poster="src\static\images\explainer-thumbnail.jpg"
  muted={false}
  class="rounded-xl shadow-lg w-3/5 h-3/5 max-w-4/5 max-h-4/5 mx-auto"
  src={myVideo}
>
  Your browser does not support the video tag.
</video>
