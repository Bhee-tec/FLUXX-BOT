'use client';
import { useState } from 'react';
import Sidebar from '@/app/components/admin/Sidebar'
import Header from '@/app/components/admin/Header'
import Statecard from '@/app/components/admin/Statecard'
import Userlist from '@/app/components/admin/Userlist'

export default function Dashboard() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        {/* Header */}
      <Header />
      <Statecard />
        <Userlist />
      </div>
    </div>
  );
}
