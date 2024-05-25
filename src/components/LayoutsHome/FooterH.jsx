import React, { useState } from 'react';
import ItemsContainer from "./ItemsContainerH";
import SocialIcons from "./SocialIconsH";
import { Icons } from "./MenusH";

export default function Footer() {
  const phoneNumber = '212661506073';
  const [commentaire, setCommentaire] = useState('');

  const handleChange = (e) => {
    setCommentaire(e.target.value);
  };




  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">VERONA SUD</span> acceuille tout le monde
        </h1>
        <div className='flex'>
          <form >
            <textarea className="w-full border rounded-md p-2 text-black" rows="4" placeholder="Écrivez votre commentaire ici..." value={commentaire} onChange={handleChange}></textarea>
            <button type="button" className="text-white bg-teal-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Envoyer</button>
          </form>
          <div>
          </div>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 ayman el baz. All rights reserved.</span>
        <span>ayman el baz · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  )
}
