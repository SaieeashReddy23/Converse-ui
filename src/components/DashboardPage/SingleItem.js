import { useState } from 'react'
import DetailsComponent from './DetailsComponent'
import ItemComponent from './ItemComponent'

const SingleItem = () => {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div className="item-container">
      <ItemComponent
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
      {showDetails && <DetailsComponent />}
    </div>
  )
}
export default SingleItem
