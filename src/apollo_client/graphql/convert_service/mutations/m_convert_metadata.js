import { gql } from '@apollo/client'

const M_CONVERT_METADATA = gql`
            mutation metadata($file: Upload!, $format: String!, $convert: String!) {
                convert_metadata(
                    file: $file, 
                    format: $format, 
                    convert: $convert) {
                success
                errors
                post {
                    status
                    message
                    }
                }
            }
`
export default M_CONVERT_METADATA
