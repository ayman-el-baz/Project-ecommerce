import React from 'react';
import s1 from './assets/s1.png';
import s2 from './assets/s2.png';
import s3 from './assets/s3.png';

function FeatureSection() {
  return (
    <section className='m-10'>
      <h1 className='font-bold text-4xl my-10 text-center'>LES PRODUITS DE VERONA SUD</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center space-x-8'>
        <button className='flex flex-col items-center h-auto max-w-full rounded-lg uppercase shadow-lg py-3 px-10 bg-gray-300 border border-gray-200 text-gray-600 text-lg hover:bg-orange-300 hover:text-gray-800'>
          <img className='w-52 mb-3 mx-auto' src={s1} alt="" srcset="" />
          <div className='mt-4'>
            <span className='text-xl font-bold'>produit de réparation</span>
          </div>
        </button>
        <button className='flex flex-col items-center h-auto max-w-full uppercase shadow-lg py-3 px-10 bg-gray-300 border border-gray-200 rounded-lg text-gray-600 text-lg hover:bg-orange-300 hover:text-gray-800'>
          <img className='w-52 mb-3 mx-auto' src={s2} alt="" srcset="" />
          <div className='mt-4'>
            <span className='text-xl font-bold'>produit d'amélioration</span>
          </div>
        </button>
        <button className='flex flex-col items-center h-auto max-w-full uppercase shadow-lg py-3 px-10 bg-gray-300 border border-gray-200 rounded-lg text-gray-600 text-lg hover:bg-orange-300 hover:text-gray-800'>
          <img className='w-52 mb-3 mx-auto' src={s3} alt="" srcset="" />
          <div className='mt-4'>
            <span className='text-xl font-bold'>produit de maintenir</span>
          </div>
        </button>
      </div>
    </section>
  );
}

export default FeatureSection;
