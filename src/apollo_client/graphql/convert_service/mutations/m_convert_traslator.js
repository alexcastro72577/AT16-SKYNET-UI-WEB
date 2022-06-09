import { gql } from '@apollo/client'

const M_CONVERT_TRASLATOR = gql`
            mutation translator($file: Upload!, $language_in: String!, $language_out: String!, $format: String!,
                                $convert: String!) {
            convert_translator(
                    file: $file,
                    language_in: $language_in,
                    language_out: $language_out,
                    format: $format,
                    convert: $convert
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
export default M_CONVERT_TRASLATOR
