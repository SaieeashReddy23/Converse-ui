import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { BsInfoCircle } from 'react-icons/bs'
import { IoIosArrowDropdown } from 'react-icons/io'

const ItemComponent = (props) => {
  const { showDetails, setShowDetails } = props
  return (
    <div className="item">
      <div className="item-column item-description">
        <div className="item-header">
          Item desc <div className="line"></div>
        </div>

        <p className="item-value">
          Steel 5mm rods
          <span className="desc-info">
            {' '}
            <BsInfoCircle />
          </span>
        </p>
      </div>
      <div className="item-column item-quantity">
        <div className="item-header">
          Quantity <div className="line"></div>
        </div>
        <p className="item-value">
          10mts
          <span className="quantity-icon">
            <IoIosArrowDropdown />
          </span>
        </p>
      </div>
      <div className="item-column item-planned-date">
        <div className="item-header">
          Planned Date <div className="line"></div>
        </div>
        <p className="item-value">24/10/2023</p>
      </div>
      <div className="item-column item-status">
        <div className="item-header">
          Status <div className="line"></div>
        </div>
        <p className="item-value">Created</p>
      </div>
      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        Details
        {showDetails ? (
          <span>
            <RiArrowDropUpLine />
          </span>
        ) : (
          <span>
            <RiArrowDropDownLine />
          </span>
        )}
      </button>
    </div>
  )
}
export default ItemComponent
