import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

import VerifiedIcon from '@mui/icons-material/Verified'
import InfoIcon from '@mui/icons-material/Info'
import { Tooltip } from '@mui/material'
import styled from 'styled-components'

const ItemComponent = (props) => {
  const { showDetails, setShowDetails } = props
  return (
    <Wrapper>
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
      {/* <div className="item-column item-status">
        <div className="item-header">
          Status <div className="line"></div>
        </div>
        <p className="item-value">Created</p>
      </div> */}
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
    </Wrapper>
  )
}
export default ItemComponent

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .item-column {
    margin-left: 1rem;
    /* border: 1px solid red; */
  }

  .item-header {
    font-size: 1rem;
    color: var(--grey-500);
    display: inline-block;
    letter-spacing: 1px;
  }

  .line {
    border-bottom: 1px solid var(--grey-100);
    width: 90%;
    margin: 0 auto;
  }

  .item-value {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  .desc-info {
    margin: 0 0.3rem;
    position: relative;
    top: 0.3rem;
    color: var(--primary-400);
    transition: all 0.1s;
    font-size: 0.5rem;
  }

  .desc-info:hover {
    color: var(--primary-700);
  }

  .quantity-icon {
    margin: 0 0.3rem;
    position: relative;
    top: 0.3rem;
    color: green;
  }

  .details-btn {
    text-transform: uppercase;
    font-size: 0.7rem;
    background: var(--primary-500);
    border: none;
    color: var(--white);
    border-radius: 5px;
    padding-left: 1rem;
    margin-right: 2rem;
    display: flex;
    align-items: center;
    transition: var(--transition);
    margin-bottom: 1.75rem;
    letter-spacing: 0.1rem;
  }

  .details-btn span {
    display: inline-flex;
    align-items: center;
    font-size: 1.7rem;
  }

  .details-btn:hover {
    background-color: var(--primary-600);
    transform: scale(1.025);
  }

  .item-status p {
    font-size: 0.7rem;
    text-transform: uppercase;
    background-color: rgb(0, 164, 0);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    letter-spacing: 0.1rem;
    color: var(--white);
  }
`
