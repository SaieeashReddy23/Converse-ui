import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { BsInfoCircle } from 'react-icons/bs'
import { IoIosArrowDropdown } from 'react-icons/io'
import VerifiedIcon from '@mui/icons-material/Verified'
import InfoIcon from '@mui/icons-material/Info'
import { Tooltip } from '@mui/material'
import { blue } from '@mui/material/colors'

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
            <Tooltip
              title="Category : Steel"
              placement="top-start"
              PopperProps={{
                sx: {
                  '& .MuiTooltip-tooltip': {
                    // border: 'solid skyblue 1px',
                    // color: 'deepskyblue',
                    backgroundColor: 'f0f4f8',
                    letterSpacing: '0.1rem',
                    padding: `0.5 1`,
                    backgroundColor: '#334e68',
                  },
                },
              }}
            >
              <InfoIcon style={{ fontSize: '1.1rem' }} />
            </Tooltip>
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
            <VerifiedIcon style={{ fontSize: '1.1rem' }} />
          </span>
        </p>
      </div>
      <div className="item-column item-planned-date">
        <div className="item-header">
          Planned Date <div className="line"></div>
        </div>
        <p className="item-value">24/10/2023</p>
      </div>
      {/* 
      <div className="item-column item-planned-date">
        <div className="item-header">
          Procurred till date <div className="line"></div>
        </div>
        <p className="item-value">400 tons</p>
      </div> */}
      <div className="item-column item-status">
        <div className="item-header">
          Status <div className="line"></div>
        </div>
        <p className="item-value">Created</p>
      </div>
      <div className="item-column">
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
    </div>
  )
}
export default ItemComponent
