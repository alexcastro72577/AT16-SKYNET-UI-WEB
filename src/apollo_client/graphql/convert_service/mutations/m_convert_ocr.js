import { gql } from '@apollo/client'

const M_CONVERT_OCR = gql`
    mutation convert_ocr ($file: Upload!, $language: String!, $format: String!, $converter: String! ) {
        convert_ocr(
            file: $file,
            language: $language,
            format: $format,
            converter: $converter
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
export default M_CONVERT_OCR
