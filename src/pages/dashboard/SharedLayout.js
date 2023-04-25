import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'

const SharedLayout = () => {
  return (
    <div className="shared-container">
      <Sidebar />
      <Outlet />
    </div>
  )
}
export default SharedLayout
