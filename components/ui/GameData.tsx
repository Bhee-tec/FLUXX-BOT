'use client';

import { useState } from "react";

interface GameDataProps {
  score: number;
  currentMoves: number;
  totalMoves: number;
}

export default function GameData({ 
  score = 0, 
  currentMoves = 0, 
  totalMoves = 30 
}: GameDataProps) {
  const [error] = useState<string | null>(null);

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 mb-6">
      <div className="flex justify-between items-center bg-white backdrop-blur-sm rounded-xl p-4 shadow-lg">
        <div className="text-center">
          <div className="text-sm text-gray-600">Score</div>
          <div className="text-2xl font-bold text-purple-600">
            {score.toLocaleString()}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-sm text-gray-600">Moves</div>
          <div className="text-2xl font-bold text-pink-600">
            {currentMoves}/{totalMoves}
          </div>
        </div>
      </div>
    </div>
  );
}