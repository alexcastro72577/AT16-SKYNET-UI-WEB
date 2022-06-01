import { gql } from '@apollo/client'

const POST_RESOURCES = gql`
    mutation CreateNewPost($name_value: String!, $type_value: String!, $model_value: String!, $state_value: String!) {
        createPost(
        name: $name_value,
        type: $type_value,
  	    model: $model_value,
  	    state: $state_value)
        { 
            post{
                resource_name
                resource_type
                resource_model
                resource_state
            }
            success
            errors
        }
    }
`
export default POST_RESOURCES
