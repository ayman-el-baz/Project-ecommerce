import React from 'react'
import man1 from './assets/man1.png'
import { Link } from 'react-router-dom';

export default function Acceuile() {

  return (
    <section className="slider_section bg-cover bg-center bg-blue-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="col-md-6">
            <div className="detail-box text-white">
              <h1 className="font-bold text-4xl md:text-6xl mb-6 text-blue-700">
                Vendre les <br />
                Matériaux de <br />
                Construction
              </h1>
              <p className="text-gray-700 text-base md:text-2xl mb-6">
                Votre source de confiance pour des matériaux de construction et d'outillage de qualité. Une gamme
                complète pour tous vos projets, avec des conseils personnalisés. Contactez-nous dès aujourd'hui pour des
                solutions sur mesure.
              </p>
              <div className='flex space-x-4'>
                <Link to="/home" className="inline-block uppercase py-3 px-10 bg-orange-500 border border-orange-500 rounded-lg text-white text-lg hover:bg-transparent hover:text-orange-500">Commencez</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src={man1} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
