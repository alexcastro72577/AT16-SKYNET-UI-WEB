import { gql } from '@apollo/client'

const UPDATE_PERSON = gql`
    mutation personUpdate($id: ID!, $name1: String!, $age1: String!, $country1: String!, $gender1: String!, $city1: String!) {
        updatePerson(
        id_person: $id,
        name: $name1,
        age: $age1,
  	    country: $country1,
        gender: $gender1
  	    city: $city1
        ){
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