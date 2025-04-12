import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Game from '@/components/ui/Game';
import GameData from '@/components/ui/GameData';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1c2e] text-white p-4 font-sans">
      <Navbar />
      <Game />
      <GameData score={0} currentMoves={0} totalMoves={0} />
    </div>
  );
}
