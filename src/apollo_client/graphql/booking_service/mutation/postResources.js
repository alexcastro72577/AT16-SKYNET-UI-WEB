import { gql } from '@apollo/client'

const POST_RESOURCES = gql`
    mutation CreateNewPost($name1: String!, $type1: String!, $model1: String!, $state1: String!) {
        createPost(
        name: $name1,
        type: $type1,
  	    model: $model1,
  	    state: $state1)
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

<<<<<<< HEAD
=======

>>>>>>> b96249753ab14377b81fd4ae2f6599d0829731ca
