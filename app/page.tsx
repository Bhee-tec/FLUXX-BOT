import React from 'react'
import Navbar from "@/app/components/ui/navbar",
import Header from '@/app/components/ui/header'
import Game from '@/app/components/ui/game'
import Gamedata from '@/app/components/ui/gamedata'
export default function page() {
  return (
    <div className="flex flex-col min-h-screen  bg-[#1a1c2e] text-white p-4 font-sans">
  <Header />
  <div className="max-h-fit bg-gradient-to-br p-4">
    <Gamedata />
  <Game />
  </div>
  <Navbar />
</div>
  )
}
