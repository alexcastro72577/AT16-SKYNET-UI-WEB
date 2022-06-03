import { gql } from '@apollo/client'

const DELETE_PERSON = gql`
    mutation personDelete($id: ID!) 
    {
        deletePerson(
        id_person: $id)
        {
        success
        errors
        }
    }
`
export default DELETE_PERSON