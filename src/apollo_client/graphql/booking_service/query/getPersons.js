import { gql } from '@apollo/client'

const GET_PERSONS = gql`
    query listar {
        listPostsPerson{
            success
            errors
            posts {
                person_city
                person_full_name
                person_country
                _id
            }
        }
    }
`
export default GET_PERSONS