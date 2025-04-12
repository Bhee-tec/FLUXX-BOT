import React from 'react'
import Navbar from '@/components/ui/Navbar'

export default function leader() {
  return (
    <div className="max-h-fit">
    <div className="max-h-fit bg-[#1a1c2e] p-4 py-18 md:p-8">
  <div className="max-w-2xl mx-auto">
    {/* Header */}
    <h1 className="text-2xl font-bold text-white mb-4">Top 100 Users</h1>
    
    {/* List Container */}
    <div className="bg-[#1a1c2e] rounded-lg shadow-sm divide-y">
      {/* Column Headers */}
      <div className="hidden md:flex p-4 bg-gray-50 text-gray-500 font-medium">
        <div className="w-16">Rank</div>
        <div className="flex-1">Username</div>
        <div className="w-32 text-right">Balance</div>
      </div>

      {/* Users List */}
      {Array.from({ length: 100 }).map((_, index) => (
        <div 
          key={index}
          className="flex flex-col md:flex-row items-start md:items-center p-4 hover:bg-gray-50 transition-colors"
        >
          {/* Rank */}
          <div className="w-16 flex items-center mb-2 md:mb-0">
            <span className="text-gray-500 font-medium">
              {index + 1}
              {index < 3 && (
                <span className="ml-1">
                  {['🥇','🥈','🥉'][index]}
                </span>
              )}
            </span>
          </div>

          {/* Username */}
          <div className="flex-1 flex items-center mb-2 md:mb-0">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
              {String.fromCharCode(65 + (index % 26))}
            </div>
            <span className="font-medium truncate">
              user_{index + 1}
            </span>
          </div>

          {/* Balance */}
          <div className="w-32 text-right">
            <span className="font-semibold text-green-600">
              <span className="text-white"> $flx </span> {(10000 - index * 100).toLocaleString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
  <Navbar />
</div>
  )
}
