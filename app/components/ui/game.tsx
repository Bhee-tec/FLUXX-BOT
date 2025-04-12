'use client';

import { useState, useEffect, useCallback } from 'react';
import GameData from '@/components/ui/GameData'; // Import GameData component
import Header from '@/components/ui/Header'; // Import Header component

const COLORS = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-orange-500'] as const;
type Color = typeof COLORS[number];

export default function Game() {
  const [tiles, setTiles] = useState<Color[]>([]);
  const [score, setScore] = useState<number>(0);
  const [moves, setMoves] = useState<number>(30);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const createBoard = useCallback(() => {
    const newTiles = Array.from({ length: 64 }, () => COLORS[Math.floor(Math.random() * COLORS.length)]);
    setTiles(newTiles);
    setTimeout(() => checkPossibleMoves(newTiles), 500);
  }, []); 

  useEffect(() => {
    createBoard(); 
    const interval = setInterval(() => setMoves(30), 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [createBoard]);

  const handleTileClick = (index: number) => {
    if (moves <= 0) return;

    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else {
      const isValidSwap = checkValidSwap(selectedIndex, index);
      if (isValidSwap) {
        swapTiles(selectedIndex, index);
        setMoves((m) => m - 1);
      }
      setSelectedIndex(null);
    }
  };

  const checkValidSwap = (index1: number, index2: number) => {
    const row1 = Math.floor(index1 / 8);
    const col1 = index1 % 8;
    const row2 = Math.floor(index2 / 8);
    const col2 = index2 % 8;
    return (Math.abs(row1 - row2) === 1 && col1 === col2 || 
           (Math.abs(col1 - col2) === 1 && row1 === row2));
  };

  const swapTiles = (index1: number, index2: number) => {
    const newTiles = [...tiles];
    [newTiles[index1], newTiles[index2]] = [newTiles[index2], newTiles[index1]];
    setTiles(newTiles);

    setTimeout(() => {
      const matches = findMatches(newTiles);
      if (matches.size === 0) {
        const revertedTiles = [...newTiles];
        [revertedTiles[index1], revertedTiles[index2]] = [revertedTiles[index2], revertedTiles[index1]];
        setTiles(revertedTiles);
      } else {
        handleMatches(matches);
      }
    }, 300);
  };

  const findMatches = (tileArray: Color[]) => {
    const matched = new Set<number>();
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 6; col++) {
        const index = row * 8 + col;
        if (
          tileArray[index] === tileArray[index + 1] &&
          tileArray[index] === tileArray[index + 2]
        ) {
          matched.add(index);
          matched.add(index + 1);
          matched.add(index + 2);
        }
      }
    }

    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 8; col++) {
        const index = row * 8 + col;
        if (
          tileArray[index] === tileArray[index + 8] &&
          tileArray[index] === tileArray[index + 16]
        ) {
          matched.add(index);
          matched.add(index + 8);
          matched.add(index + 16);
        }
      }
    }
    return matched;
  };

  const handleMatches = (matched: Set<number>) => {
    setScore(s => s + (matched.size * 5));
    const newTiles = tiles.map((color, index) =>
      matched.has(index) ? COLORS[Math.floor(Math.random() * COLORS.length)] : color
    );
    setTiles(newTiles);

    setTimeout(() => {
      const newMatches = findMatches(newTiles);
      if (newMatches.size > 0) {
        handleMatches(newMatches);
      } else {
        checkPossibleMoves(newTiles);
      }
    }, 300);
  };

  const checkPossibleMoves = (tileArray: Color[]) => {
    for (let i = 0; i < tileArray.length; i++) {
      if (i % 8 < 7) {
        const temp = [...tileArray];
        [temp[i], temp[i + 1]] = [temp[i + 1], temp[i]];
        if (findMatches(temp).size > 0) return true;
      }

      if (i < 56) {
        const temp = [...tileArray];
        [temp[i], temp[i + 8]] = [temp[i + 8], temp[i]];
        if (findMatches(temp).size > 0) return true;
      }
    }

    if (moves > 0) {
      setTimeout(() => {
        alert('No more moves! Reshuffling...');
        createBoard();
      }, 500);
    }
    return false;
  };

  return (
    <div className="max-w-md mx-auto mt-6 mb-6">
      <Header score={score} />
      <GameData score={score} currentMoves={moves} totalMoves={30} />
      <div className="grid grid-cols-8 gap-1 bg-white p-2 rounded-xl shadow-xl">
        {tiles.map((color, index) => (
          <button
            key={index}
            onClick={() => handleTileClick(index)}
            className={`aspect-square rounded-lg transition-all duration-300 
              ${color} 
              ${selectedIndex === index ? 'ring-2 ring-white ring-offset-2' : ''} 
              hover:scale-105 cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
}
