"use client";
import {UseRouter} from 'next/navigation';
import React from 'react';

export default function navbar() {
    const router = UseRouter();
  
  return (
    <>
    <div className="fixed bottom-0 left-0 right-0 bg-[#2e3248] border-t border-[#3a3f5a]">
  <div className="flex justify-around items-center p-2">

    <button onClick={() => router.push('/')} className="flex flex-col items-center p-2 text-yellow-400">   
    <svg 
        className="w-6 h-6 text-[#3244a7] hover:text-blue-500 transition-colors hover:scale-105" 
        viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="Home">
        <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      <span className="text-xs mt-1">Home</span>
    </button>

    <button onClick={() => router.push('/task')} className="flex flex-col items-center p-2 text-white">
    <svg className="w-6 h-6 text-[#3244a7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 17l-5-5 1.41-1.41L9 14.17l9.59-9.58L21 6l-12 12z"/>
    </svg>
    <span className="text-xs mt-1">Tasks</span>
    </button>

    <button onClick={() => router.push('/leader')} className="flex flex-col items-center p-2 text-white">
    <svg className="w-8 h-8 text-[#3244a7] hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="Trophy">
    <path d="M21 4h-2V3a1 1 0 00-1-1H6a1 1 0 00-1 1v1H3a1 1 0 00-1 1v3a4 4 0 004 4h1.535a4 4 0 003.743 2.581l.722-7.581H8V8h8v2h-.3l.723 7.581A4 4 0 0019.465 12H21a4 4 0 004-4V5a1 1 0 00-1-1zM4 8V6h2v2H4z"/>
    <path d="M12 22a1 1 0 01-.894-.553l-2-4a1 1 0 011.788-.894l2 4A1 1 0 0112 22zM12 22a1 1 0 00.894-.553l2-4a1 1 0 10-1.788-.894l-2 4A1 1 0 0012 22z"/>
    </svg>
      <span className="text-xs mt-1">Leaders</span>
    </button>
    <button onClick={() => router.push('/wallet')} className="flex flex-col items-center p-2 text-white">
    <svg className="w-6 h-6 text-[#3244a7]" viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="Wallet">
    <path d="M5 4h14a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3zm12 4H7a1 1 0 000 2h10a1 1 0 000-2zm-4 4H7a1 1 0 000 2h6a1 1 0 000-2z"/>
    </svg>
      <span className="text-xs mt-1">Wallet</span>
    </button>
  </div>
</div>
</>
  );
}
