import React from 'react'

export default function header() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
    <div className="bg-[#2e3248] rounded-full px-4 py-2 flex items-center">
      <span className="text-green-400 mr-2">⚡</span>
      <span className="font-bold">50/100</span>
    </div>
    
    <div className="bg-[#2e3248] rounded-full px-4 py-2 flex items-center">
      <span className="text-yellow-400 mr-2">🪙</span>
      <span className="font-bold">1,250</span>
    </div>

  </div>
  <div className="flex justify-center mb-6">
    <div className="bg-[#2e3248] rounded-full w-32 h-32 flex items-center justify-center border-4 border-yellow-500">
      <span className="text-5xl">🐹</span>
    </div>
  </div>
    </div>
  )
}
