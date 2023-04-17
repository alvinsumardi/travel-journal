import mtFujiImage from '/mt-fuji.jpg'
import locationPin from '/location-pin.svg'

export default function Card(props) {
    console.log(props)

    // const travelImageSource = props.item.imageUrl

    const travelImgStyle = {
        backgroundImage: 'url(' + props.item.imageUrl + ')',
    }

    return (
        <article className="travel-card">
            <div className='travel-img' style={travelImgStyle}></div>
            <div className="card-info">
                <div className='mini-info'><img src={locationPin} className='travel-icon' /> {props.item.location} <a href={props.item.googleMapsUrl}>View on Google Maps</a></div>
                <h2>{props.item.title}</h2>
                <p className='date'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='description'>{props.item.description}</p>
            </div>

        </article>

    )
}