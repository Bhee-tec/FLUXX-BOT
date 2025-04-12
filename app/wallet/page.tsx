import React from 'react'
import Navbar from '@/components/ui/Navbar'

export default function wallet() {
  return (
    <div className="min-h-screen bg-[#1a1c2e] p-4 md:p-8">
  <div className="max-w-2xl mx-auto">
    {/* Balance Section */}
    <div className="bg-[#2e3248] rounded-xl p-4 md:p-6 shadow-sm mb-4 md:mb-6">
      <h2 className="text-xs md:text-sm text-gray-500 mb-1">Total Balance</h2>
      <div className="text-2xl md:text-3xl font-bold text-white-400">$2,450.50</div>
    </div>

    {/* Action Buttons - Smaller on Mobile */}
    <div className="flex md:grid md:grid-cols-3 gap-2 md:gap-3 mb-6 md:mb-8 overflow-x-auto pb-2">
      <button className="flex flex-col items-center p-2 md:p-4 bg-blue-500 text-white rounded-lg md:rounded-xl hover:bg-blue-600 transition-colors min-w-[110px] md:min-w-[100px] flex-shrink-0">
        <svg className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <span className="text-sm md:text-base">Send</span>
      </button>
      
      <button className="flex flex-col items-center p-2 md:p-4 bg-green-500 text-white rounded-lg md:rounded-xl hover:bg-green-600 transition-colors min-w-[110px] md:min-w-[100px] flex-shrink-0">
        <svg className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m-8-8h16" />
        </svg>
        <span className="text-sm md:text-base">Receive</span>
      </button>
      
      <button className="flex flex-col items-center p-2 md:p-4 bg-purple-500 text-white rounded-lg md:rounded-xl hover:bg-purple-600 transition-colors min-w-[110px] md:min-w-[100px] flex-shrink-0">
        <svg className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-sm md:text-base">Buy Token</span>
      </button>
    </div>

    <div className="bg-[#2e3248] rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
      
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {[
          { type: 'sent', amount: '-$500', to: '0x3f...d4c9', date: '2024-02-15', status: 'Completed' },
          { type: 'received', amount: '+$1,200', from: '0x8a...b2f1', date: '2024-02-14', status: 'Completed' },
          { type: 'purchase', amount: '50 TOK', details: 'Token Purchase', date: '2024-02-13', status: 'Pending' },
        ].map((tx, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                ${tx.type === 'sent' ? 'bg-red-100 text-red-500' : 
                  tx.type === 'received' ? 'bg-green-100 text-green-500' : 
                  'bg-purple-100 text-purple-500'}`}>
                {tx.type === 'sent' ? '↑' : tx.type === 'received' ? '↓' : '$'}
              </div>
              <div>
                <div className="font-medium text-white-400">
                  {tx.type === 'sent' ? `Sent to ${tx.to}` : 
                   tx.type === 'received' ? `Received from ${tx.from}` : 
                   tx.details}
                </div>
                <div className="text-sm text-gray-500">{tx.date}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-medium ${tx.type === 'sent' ? 'text-red-500' : 
                tx.type === 'received' ? 'text-green-500' : 'text-purple-500'}`}>
                {tx.amount}
              </div>
              <div className="text-sm text-gray-500">{tx.status}</div>
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
