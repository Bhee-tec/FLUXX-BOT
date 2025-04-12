import React from 'react';
import Navbar from '@/app/components/ui/Navbar';
import Game from '@/app/components/ui/Game';
export default function page() {
  return (
    <div className="flex flex-col min-h-screen  bg-[#1a1c2e] text-white p-4 font-sans">
  <div className="max-h-fit bg-gradient-to-br p-4">
  <Game />
  </div>
  <Navbar />
</div>
  )
}
