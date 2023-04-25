import { useState } from 'react'
import SingleItem from './SingleItem'

const DashboardItems = () => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="items">
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
    </div>
  )
}
export default DashboardItems
