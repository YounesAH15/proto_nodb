<script lang="ts">
    import ImmersiveLayout from '$lib/components/ImmersiveLayout.svelte';
    import { page } from '$app/stores';
  
    const titles: any = 
        {
      'chapter-1': 'The Blacksmith’s Secret',
      'chapter-2': 'The Oath',
      'chapter-3': 'Passage Through the Holy Land',
      'chapter-4': 'Test of the Templar',
      'chapter-5': 'The Council of Jerusalem',
      'chapter-6': 'The Trial of Honor',
      'chapter-7': 'Rise of the Knight',    
    };
  
    $: chapterId = 'chapter-'+$page.params.id;
    $: title = titles[chapterId]
  </script>
  
  <ImmersiveLayout title={title ?? 'Unknown Chapter'}>
    <slot />
  </ImmersiveLayout>
  