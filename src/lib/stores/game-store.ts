import { writable } from 'svelte/store';

type GameState = {
  currentScene: string;
  inventory: string[];
  puzzlesSolved: string[];
  choicesMade: Record<string, string>;
};

const defaultState: GameState = {
  currentScene: 'chapter-1',
  inventory: [],
  puzzlesSolved: [],
  choicesMade: {},
};

// Load state from localStorage
function loadState(): GameState {
  if (typeof localStorage === 'undefined') return defaultState;

  const saved = localStorage.getItem('gameState');
  if (!saved) return defaultState;

  try {
    return JSON.parse(saved);
  } catch {
    return defaultState;
  }
}

// Save to localStorage whenever state changes
function persist(state: GameState) {
  localStorage.setItem('gameState', JSON.stringify(state));
}

export const gameStore = writable<GameState>(
  JSON.parse(localStorage.getItem('gameStore') || 'null') ?? loadState()
);
// Subscribe to changes and persist them
gameStore.subscribe((state) => {
  if (typeof localStorage !== 'undefined') {
    persist(state);
  }
});

gameStore.subscribe(value => {
  localStorage.setItem('gameStore', JSON.stringify(value));
});

export const musicEnabled = writable(true);