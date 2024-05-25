import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  const handleWhatsApp = () => {
    // Mettez ici le lien de votre compte WhatsApp
    window.open('https://wa.me/212661506073', '_blank');
  };

  return (
    <div className='fixed right-4 bottom-4 bg-green-500 text-white rounded-full p-2 cursor-pointer'>
      <FaWhatsapp size={24} onClick={handleWhatsApp} />
    </div>
  );
};

export default WhatsAppIcon;