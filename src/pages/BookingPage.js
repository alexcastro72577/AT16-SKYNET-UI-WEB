import { Link } from 'react-router-dom'
const BookingPage = () => {
    return (
        <main>
            <div className="title"> Booking Service</div>
            <br/>
        <Link to="/booking/person" className="textLink">
          Insert Person
        </Link>
        <br/>
        <Link to="/booking/resources" className="textLink">
          Insert Resource
        </Link>
      </main>
        
    )
}

export default BookingPage
