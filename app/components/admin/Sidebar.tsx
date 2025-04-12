'use client';
import React from 'react'
import { useState } from 'react';

export default function Sidebar() {
     const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <aside className={`bg-white w-64 min-h-screen shadow-lg fixed md:relative transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-4">
          <a href="#" className="block p-4 text-gray-600 hover:bg-gray-100">Dashboard</a>
          <a href="#" className="block p-4 text-gray-600 hover:bg-gray-100">Users</a>
          <a href="#" className="block p-4 text-gray-600 hover:bg-gray-100">Transactions</a>
          <a href="#" className="block p-4 text-gray-600 hover:bg-gray-100">Task</a>
          <a href="#" className="block p-4 text-gray-600 hover:bg-gray-100">Settings</a>
        </nav>
      </aside>
  )
}