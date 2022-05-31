import { gql } from '@apollo/client'

const UPDATE_RESOURCE = gql`

    mutation resource($id: ID!, $name1: String!, $type1: String!, $model1: String!, $state1: String!) {
        updatePost(
        id_source: $id,
        name: $name1,
        type: $type1,
        model: $model1,
        state: $state1)
        {
            success
            errors
            post {
                _id
                resource_name
                resource_type
                resource_model
                resource_state
            }
        }
    }
`
export default UPDATE_RESOURCE