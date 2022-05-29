import { gql } from '@apollo/client'

const GET_RESOURCES = gql`
    query listar {
        listPosts{
            success
            errors
            posts {
                _id
			    resource_name
                resource_type
                resource_model
                resource_state
            }
    
        }
    }
`
export default GET_RESOURCES
