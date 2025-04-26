import { writable } from 'svelte/store';
import { localStorageStore } from './localStorageStore';

const titles = {
  'chapter-1': 'The Blacksmith’s Secret',
  'chapter-2': 'The Oath',
  'chapter-3': 'Passage Through the Holy Land',
  'chapter-4': 'Test of the Templar',
  'chapter-5': 'The Council of Jerusalem',
  'chapter-6': 'The Trial of Honor',
  'chapter-7': 'Rise of the Knight',  
}

type GameState = {
  currentScene: string;
  inventory: string[];
  puzzlesSolved: string[];
  choicesMade: Record<string, string>;
  titles:  Record<string, string>;
};

const defaultState: GameState = {
  currentScene: 'chapter-1',
  inventory: [],
  puzzlesSolved: [],
  choicesMade: {},
  titles
};



import { get } from 'svelte/store';
import { goto } from '$app/navigation';

  // Example: move to next scene
  export function advanceChapter(chapter?:string) {
    let nextChapter: string = chapter ?? "chapter-"+(parseInt(get(gameStore).currentScene.at(-1)??"0")+1).toString()
    gameStore.update((state) => ({
      ...state,
      currentScene: nextChapter
    }));
    console.log("advanceChapter", {nextChapter, chapter});
  
    setTimeout(()=>{
      if(!location) goto("/");
      location.replace("/scene/"+nextChapter);
    },1500)
  }

  // Example: add an item to inventory
  export function addItem(item: string) {
    gameStore.update((state) => ({
      ...state,
      inventory: state.inventory.includes(item) ? state.inventory : [...state.inventory, item]
    }));
  }

  // Example: mark puzzle as solved
  export function solvePuzzle(puzzleId: string) {
    gameStore.update((state) => ({
      ...state,
      puzzlesSolved: state.puzzlesSolved.includes(puzzleId) ? state.puzzlesSolved : [...state.puzzlesSolved, puzzleId]
    }));
  }

  // Example: register a choice
  export function makeChoice(questionId: string, answer: string) {
    gameStore.update((state) => ({
      ...state,
      choicesMade: {
        ...state.choicesMade,
        [questionId]: answer
      }
    }));
  }

  export function newGame() {
    console.log('NewGame');
    
    gameStore.update((state) =>({
      ...state,
      currentScene: 'chapter-1',
      puzzlesSolved: [],
      choicesMade: {},
      inventory: []
    }));
    location.replace('/scene/chapter-1')
  }

  export function loadGame() {
    console.log("loadGame");
    const saved = localStorage.getItem('gameStore');
    if (saved) {
      const scene = JSON.parse(saved).currentScene;
      location.replace(scene);

    } else {
      alert('No saved game found.');
    }
  }
// Game state stored in localStorage
export const gameStore = localStorageStore<GameState>('gameStore', defaultState);

// Optional: also persist music preference
export const musicEnabled = localStorageStore<boolean>('musicEnabled', true);

// Optional: also persist music preference
export const alreadyPlayed = localStorageStore<boolean>('alreadyPlayed', true);