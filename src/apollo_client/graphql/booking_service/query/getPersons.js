import { gql } from '@apollo/client'

const GET_PERSONS = gql`
    query listar {
        listPostsPerson{
            success
            errors
            posts {
                _id
                person_full_name
                person_age
                person_city
                person_country
                person_gender
            }
        }
    }
`
export default GET_PERSONS