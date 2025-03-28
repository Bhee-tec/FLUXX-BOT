import React from 'react'

export default function gamedata() {
  return (
    <div className="max-w-2xl mx-auto mb-6">
    <div className="flex justify-between items-center bg-white/100 backdrop-blur-sm rounded-xl p-4 shadow-lg">
      <div className="text-center">
        <div className="text-sm text-gray-600">Score</div>
        <div className="text-2xl font-bold text-purple-600">2,450</div>
      </div>
      
      <div className="text-center">
        <div className="text-sm text-gray-600">Moves</div>
        <div className="text-2xl font-bold text-pink-600">12/30</div>
      </div>

    </div>
    </div>
  )
}
