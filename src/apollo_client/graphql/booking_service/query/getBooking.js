import { gql } from '@apollo/client'

const GET_BOOKING = gql`
    query listar {
        listPostsBooking{
            success
            errors
            posts {
                _id
                details{
                    description
                    subject
                },
                person{
                    id
                },
                resource{
                    id
                },
                schedule{
                    date
                    end_time
                    start_time
                },
                state
                type
            }
        }
    }
`
export default GET_BOOKING