<!-- MusicNoteIcon.svelte -->

<script lang="ts">
    export let classes: string ="w-6 h-6";
    export let color: string = "white";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill={color}
  class={classes}
>
  <path d="M9 18V5l12-2v13h-2v-9.47l-8 1.34V18a3 3 0 1 1-2-2.83V18a1 1 0 0 0 2 0  z" />
</svg>
