import { gql } from '@apollo/client'

const M_CONVERT_WAPTXT = gql`
        mutation waptxt($file: Upload!, $format: String!,$convert: String!,
            $language_in: String!) {
            convert_waptxt(
                    file: $file,
                    format: $format,
                    convert: $convert,
                    language_in: $language_in
            ) {
                success
                errors
                post {
                    status
                    message
                    }
                }
        }    
`
export default M_CONVERT_WAPTXT
