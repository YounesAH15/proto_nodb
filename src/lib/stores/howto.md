# HOW TO USE Scene Store

import { currentScene } from '$lib/stores/scene-store';
currentScene.set('chapter-2');

# HOW TO USE Game Store

How to Use in a Svelte Component
<!-- svelte Copier Modifier -->
<script lang="ts">
  import { gameStore } from '$lib/stores/game-store';
  import { get } from 'svelte/store';

  // Example: move to next scene
  function advanceChapter() {
    gameStore.update((state) => ({
      ...state,
      currentScene: 'chapter-2'
    }));
  }

  // Example: add an item to inventory
  function addItem(item: string) {
    gameStore.update((state) => ({
      ...state,
      inventory: [...state.inventory, item]
    }));
  }

  // Example: mark puzzle as solved
  function solvePuzzle(puzzleId: string) {
    gameStore.update((state) => ({
      ...state,
      puzzlesSolved: [...state.puzzlesSolved, puzzleId]
    }));
  }

  // Example: register a choice
  function makeChoice(questionId: string, answer: string) {
    gameStore.update((state) => ({
      ...state,
      choicesMade: {
        ...state.choicesMade,
        [questionId]: answer
      }
    }));
  }
</script>