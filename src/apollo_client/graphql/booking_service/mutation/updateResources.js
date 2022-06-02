import { gql } from '@apollo/client'

const UPDATE_RESOURCE = gql`

    mutation resource($id: ID!, $name_value: String!, $type_value: String!, $model_value: String!, $state_value: String!) {
        updatePost(
        id_source: $id,
        name: $name_value,
        type: $type_value,
        model: $model_value,
        state: $state_value)
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