const PricingCard = ({ bgColor, title, titleColor, titleBgColor, description, descriptionColor, price, overview, buttonLabel, listItems, focus }) => {
  return (
    <div className={`${bgColor ? bgColor : "bg-white"} ${focus ? "w-100" : ""} d-flex card text-center  rounded-5 border-primary shadow-lg"`}>

      <div className={`${titleBgColor ? titleBgColor : ""} p-3 card-header`}>
        <h6 className={`${titleColor + " " + "card-title fs-2"}`}>{title}</h6>
        <p className={`${descriptionColor ? descriptionColor + " card-text" : "text-black card-text"}`}><small><i>{description}</i></small></p>
      </div>

      <div className="card-body">
        <p className="card-text">{overview}</p>
        <p className="card-text fs-1 mb-0"><b>{price}</b></p>
        <p className="card-text mb-5"> per month</p>
        <ul className="card-text no-bullets mb-5">
          {listItems.map(listItem => (
            <li className="m-3">
              <div className="d-flex pe-5 ps-5 text-start"><i class="bi bi-check2-circle me-2"></i> {listItem}</div>
            </li>
          ))}
        </ul>

        <div className="d-flex justify-content-center" >
          <button
            style={{ display: `${buttonLabel ? "inline" : "none"}` }}
            type="button"
            className="btn btn-info btn-md mt-4 mb-4 shadow">
            {buttonLabel}
          </button>
        </div>

      </div>

    </div>
  )

}

export default PricingCard;