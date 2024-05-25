import React from 'react'
import Layout from './LayoutsLanding/Layout'
import about from './assets/about.png'
import veronapic from './assets/veronapic.jpg'
import Location from './Location'
import WhatsAppIcon from './WhatsAppIcon'

export default function EnSavoirPlus() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div>
            <div className='mb-8 mt-24 md:mt-0'>
              <img className='mb-4' style={{ height: "400px", width: "100%" }} src={about} alt="" srcSet="" />
            </div>
          </div>
          <div className="container mx-auto flex flex-col md:flex-row items-start justify-start md:justify-between px-6">
            <div className="md:w-1/2 mb-6 md:mb-0 mr-8">
              <h2 className="text-4xl font-bold mb-8">présentation de l'entreprise</h2>
              <p className="text-gray-700 text-xl mb-16">VERONA SUD, fondée en 07/04/2021, est une entreprise spécialisée dans le domaine de la droguerie et de l'aménagement intérieur. Située à Agadir, VERONA SUD est un acteur incontournable sur le marché local, proposant une large gamme de produits et de services pour la construction et la décoration de la maison.
                Avec une équipe de plus de 10 employés qualifiés et passionnés, VERONA SUD s'engage à fournir à sa clientèle des produits de qualité et un service clientèle exceptionnel. L'entreprise dispose d'un vaste choix de matériaux de construction, de quincaillerie, d'électroménagers et de produits de décoration intérieure pour répondre à tous les besoins de ses clients.
                En plus de ses produits de qualité, VERONA SUD propose également des services de conseil en décoration pour accompagner ses clients dans leurs projets d'aménagement intérieur. La culture d'entreprise de VERONA SUD est axée sur l'innovation, la qualité et la satisfaction client, ce qui en fait un partenaire de confiance pour tous les projets de construction et de décoration.
              </p>
            </div>
            <div className="md:w-1/2 my-auto">
              <img src={veronapic} alt="À propos de nous" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      <Location />
      <WhatsAppIcon />
    </Layout>
  )
}
