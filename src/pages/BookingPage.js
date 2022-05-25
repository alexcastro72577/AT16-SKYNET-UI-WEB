import { Link } from 'react-router-dom'
import Resources from '../components/Resources'
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
        <br />
        <hr />
        <Resources />
      </main>
        
    )
}

export default BookingPage
