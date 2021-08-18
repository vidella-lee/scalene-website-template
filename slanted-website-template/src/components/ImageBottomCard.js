const ImageBottomCard = ({image, title, description}) => {
    return(
      <div className="d-flex card bg-transparent text-white text-center justify-content-center align-items-center p-1 p-lg-3 rounded-3 border-0" style={{width: "15rem", height: "22rem"}}>
        <div className="card-body">
          <h6 className="card-title fs-3">{title}</h6>
          <p className="card-text">{description}</p>
          <img className="d-inline d-lg-none mini-feature-card-img rounded-circle bg-white m-2" src={image} />
        </div>
        <img className="d-none d-lg-inline mini-feature-card-img rounded-circle bg-white m-2" src={image} />
      </div>  
    )
    
  }
  
  export default ImageBottomCard;