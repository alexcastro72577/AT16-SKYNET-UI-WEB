import { Link } from 'react-router-dom'
const BookingPage = () => {
    return (
        <div>
            <h1>Booking Service</h1>
        <Link to="/booking/person">
          Insert Person
        </Link>
        <br/>
        <Link to="/booking/resources">
          Insert Resource
        </Link>
      </div>
    )
}

export default BookingPage
