import React from 'react'

export default function game() {
  return (
    <div className="max-w-md mx-auto mb-6">
    <div className="grid grid-cols-8 gap-1 bg-white/100 p-2 rounded-xl shadow-xl">
      {Array.from({ length: 64 }).map((_, index) => (
        <div 
          key={index}
          className="aspect-square rounded-lg cursor-pointer hover:scale-105 transition-transform"
          style={{
            backgroundColor: [
              '#ef4444',  // Red
              '#3b82f6',  // Blue
              '#f59e0b',  // Orange
              '#10b981',  // Green
              '#8b5cf6',  // Purple
              '#ec4899'   // Pink
            ][Math.floor(Math.random() * 6)]
          }}
        ></div>
      ))}
    </div>
  </div>
  )
}
