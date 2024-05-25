import React from 'react'
import Layout from './LayoutsHome/LayoutH'
import Location from './Location'
import localisation from './assets/localisation.png'


export default function Localisation() {
  return (
    <Layout>
      <div className='my-8'>
        <div className=' max-w-full md:mt-0 m-8'>
          <img className='mb-4' style={{ height: "400px", width: "100%" }} src={localisation} alt="" srcSet="" />
        </div>
      </div>
      <Location />
    </Layout>
  )
}
