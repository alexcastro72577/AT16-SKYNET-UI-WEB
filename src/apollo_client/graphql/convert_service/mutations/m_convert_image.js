import { gql } from '@apollo/client'

const M_CONVERT_IMAGE = gql`
            mutation image($file: Upload!, $color: String!, $rotate: String!, $vertical_flip: String!, $horizontal_flip: String!,
                            $height: String!, $width: String!, $format: String!, $convert: String!) {
                convert_image(
                        file: $file,
                        color: $color,
                        rotate: $rotate,
                        vertical_flip: $vertical_flip,
                        horizontal_flip: $horizontal_flip,
                        height: $height,
                        width: $width,
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
export default M_CONVERT_IMAGE
