import "./FeaturedCard.css"
function FeaturedCard({Icon,title,description}) {
  return (
    <div className='featured-card'>
        {Icon && <Icon size={40}/> }
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default FeaturedCard