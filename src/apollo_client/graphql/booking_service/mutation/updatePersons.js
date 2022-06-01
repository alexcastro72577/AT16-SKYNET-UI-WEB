import { gql } from '@apollo/client'

const UPDATE_PERSON = gql`
    mutation personUpdate($id: ID!, $name_value: String!, $age_value: String!, $country_value: String!, $gender_value: String!, $city_value: String!) {
        updatePerson(
        id_person: $id,
        name: $name_value,
        age: $age_value,
  	    country: $country_value,
        gender: $gender_value,
  	    city: $city_value)
        {
            success
            errors
            post {
                person_full_name
                person_age
                person_city
                person_country
                person_gender
            }
        }
    }
`
export default UPDATE_PERSON