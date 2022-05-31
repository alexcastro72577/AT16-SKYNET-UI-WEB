import { gql } from '@apollo/client'

const POST_PERSONS = gql`
    mutation listar($name1: String!, $age1: String!, $country1: String!, $gender1: String!, $city1: String!) {
        createPerson(
        name: $name1,
        age: $age1,
  	    country: $country1,
        gender: $gender1
  	    city: $city1)
        { 
            success
            errors
            post{
                person_city
                person_full_name
                _id
            }
        }
    }
`
export default POST_PERSONS