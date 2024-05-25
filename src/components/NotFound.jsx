import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3050&amp;q=80&amp;exp=8&amp;con=-15&amp;sat=-75"
        alt=""
        className="w-screen h-screen"
      ></img>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-center ">
        <h1 className="text-4xl font-bold text-white mb-3">404 Not Found</h1>
        <p className="text-xl text-white opacity-65 mb-6">The page you are looking for does not exist.</p>
        <div class="text-2xl font-medium text-gray-300 hover:text-white"><Link to="/" class=""><span aria-hidden="true" className="">←</span> Back to home</Link></div>
      </div>
    </div>
  );
}
