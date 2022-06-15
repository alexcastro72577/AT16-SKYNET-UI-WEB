import { gql } from '@apollo/client'

const POST_PERSONS = gql`
    mutation listar($name_value: String!, $age_value: String!, $country_value: String!, $gender_value: String!, $city_value: String!) {
        createPerson(
        name: $name_value,
        age: $age_value,
  	    country: $country_value,
        gender: $gender_value,
  	    city: $city_value)
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