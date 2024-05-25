import React from 'react';
import verona from './assets/verona.png'


export default function Preload() {
  return (
    <div>
      <div className="w-screen h-screen flex items-center justify-center animate-pulse border  rounded-lg bg-gray-400 dark:bg-gray-800 dark:border-gray-700">
        <div className='space-y-6'>
          <img src={verona} className="w-60" alt="" />
        </div>
      </div>
    </div>
  );
}
