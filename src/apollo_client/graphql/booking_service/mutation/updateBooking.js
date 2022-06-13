import { gql } from '@apollo/client'

const UPDATE_BOOKING = gql`
    mutation bookingUpdate($id: ID!, $description_value: String!, $subject_value: String!, $personId_value: String!, $resourceId_value: String!, $date_value: String!, $endTime_value: String!, $startTime_value: String!, $state_value: String!, $type_value: String!) {
        updateBooking(
            id_booking: $id,
            description: $description_value,
            subject: $subject_value,
            person_id:$personId_value,
            resource_id: $resourceId_value,
            date: $date_value,
            end_time: $endTime_value,
            start_time: $startTime_value,
            state: $state_value,
            type: $type_value)
        {
            success
            errors
            post {
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
export default UPDATE_BOOKING