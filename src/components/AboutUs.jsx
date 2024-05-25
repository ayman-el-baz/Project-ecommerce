import React from 'react'
import about from './assets/about.jpg'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-start md:justify-between px-6">
        <div className="md:w-1/2 mb-6 md:mb-0 mr-8">
          <h2 className="text-4xl font-bold mb-8">À propos de nous</h2>
          <p className="text-gray-700 text-xl mb-16">Depuis notre création, nous nous engageons à fournir des matériaux de construction de qualité et un
            service client exceptionnel. Notre équipe expérimentée est là pour vous conseiller et vous accompagner
            dans tous vos projets. Faites-nous confiance pour trouver les solutions parfaitement adaptées à vos
            besoins en construction et rénovation.
          </p>
        <div>
        <Link to="/about-us" className="inline-block uppercase py-3 px-10 bg-blue-500 border border-blue-500 rounded-lg text-white text-lg hover:bg-transparent hover:text-blue-500">En savoir plus</Link>
        </div>
        </div>
        <div className="md:w-1/2">
          <img src={about} alt="À propos de nous" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}
