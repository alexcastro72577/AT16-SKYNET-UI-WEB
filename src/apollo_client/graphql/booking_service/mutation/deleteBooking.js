import { gql } from '@apollo/client'

const DELETE_BOOKING = gql`
    mutation bookingDelete($id: ID!) 
    {
        deleteBooking(
        id_booking: $id)
        {
        success
        errors
        }
    }
`
export default DELETE_BOOKING