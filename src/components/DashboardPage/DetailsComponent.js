const DetailsComponent = () => {
  const varianceHeader = `Variance (Act vs Req) :`
  return (
    <div className="details">
      <div className="detail-column">
        <div className="detail">
          <div className="detail-header">Project :</div>
          <div className="detail-value">Kmv Project</div>
        </div>
        <div className="detail">
          <div className="detail-header">Activity :</div>
          <div className="detail-value">Need to build a big wall</div>
        </div>
        <div className="detail">
          <div className="detail-header">Created Date :</div>
          <div className="detail-value">24/05/2023</div>
        </div>
      </div>
      <div className="detail-column">
        <div className="detail">
          <div className="detail-header">Budgeted Quantity :</div>
          <div className="detail-value">100kgs</div>
        </div>
        <div className="detail">
          <div className="detail-header">Available Inventory :</div>
          <div className="detail-value">500 tons</div>
        </div>
        <div className="detail">
          <div className="detail-header">{varianceHeader}</div>
          <div className="detail-value">0.15</div>
        </div>
      </div>
      <div className="detail-column">
        <div className="detail">
          <div className="detail-header">Created by :</div>
          <div className="detail-value">John</div>
        </div>
        <div className="detail">
          <div className="detail-header">Current Price :</div>
          <div className="detail-value">1000 Rs</div>
        </div>
      </div>
    </div>
  )
}
export default DetailsComponent
