import OwlCarousel from 'react-owl-carousel';

const options ={
    responsive: {
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:4
      }
    }
  }

const ClientsCarousel = ({clients}) => (
    <OwlCarousel className="owl-theme" dots={false} loop autoplay autoplayTimeout={3000} margin={0} responsive={options.responsive}>              
    {clients.map(client => (
      <div className="item client-logo-box m-5">
        
         <img src={client.img} />
    
      </div>
    ))}  
    </OwlCarousel>
)

export default ClientsCarousel;