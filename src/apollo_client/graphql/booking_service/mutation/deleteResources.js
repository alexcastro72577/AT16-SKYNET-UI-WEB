import { gql } from '@apollo/client'

const DELETE_RESOURCE = gql`
    mutation resourceDelete($id: ID!) {
        deletePost(
        id_source: $id){
        success
        errors
        }
    }
`
export default DELETE_RESOURCE