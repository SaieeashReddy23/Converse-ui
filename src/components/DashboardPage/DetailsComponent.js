import RefreshIcon from '@mui/icons-material/Refresh'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'
import { fontSize } from '@mui/system'
// import { IoMdRefresh } from 'react-icons/io'

const DetailsComponent = () => {
  return (
    <div className="details">
      <div className="detail-column column-1">
        <div className="detail-header">Project :</div>
        <div className="detail-value">Kmv Project</div>

        <div className="detail-header">Activity :</div>
        <div className="detail-value">Need to build a big wall</div>

        <div className="detail-header">Created Date :</div>
        <div className="detail-value">24/05/2023</div>
      </div>

      <div className="detail-column">
        <div className="detail-header">Budgeted Quantity :</div>
        <div className="detail-value">100kgs</div>

        <div className="detail-header">Inventory :</div>
        <div className="detail-value avail-inventory">
          500 tons
          <span className="refresh-icon">
            <RotateLeftIcon style={{ fontSize: '1.2rem' }} />
          </span>
        </div>

        <div className="detail-header">Procurred till date :</div>
        <div className="detail-value">400 tons</div>
      </div>
      <div className="detail-column column-3">
        <div className="detail-header">Created by :</div>
        <div className="detail-value">John</div>

        <div className="detail-header">Current Price :</div>
        <div className="detail-value">
          <span>&#x20B9;</span> 1000
        </div>

        <div className="detail-header">Variance :</div>
        <div className="detail-value">0.15</div>
      </div>
    </div>
  )
}
export default DetailsComponent
