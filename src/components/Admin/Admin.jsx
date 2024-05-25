import { useState } from 'react'

import SidebarAdmin from './SidebarAdmin'
import HomeAdmin from './HomeAdmin'


export default function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <SidebarAdmin openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <HomeAdmin />
    </div>
  )
}
