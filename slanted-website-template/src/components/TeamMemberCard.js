const TeamMemberCard = ({image, name, title, href, addDelay}) => (
    <div className="d-flex card bg-transparent text-primary text-center justify-content-center align-items-center p-1 p-lg-3 rounded-3 border-0" data-aos="fade-down" data-aos-delay={400 + addDelay} style={{width: "20rem"}}>
      <img className="team-member-card-img rounded-circle" src={image} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{title}
          <br />
          <a href={href}><i>Learn more</i></a>
        </p>
      </div>
    </div>
)

export default TeamMemberCard;