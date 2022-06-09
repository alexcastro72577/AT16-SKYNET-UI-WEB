import { gql } from '@apollo/client'

const M_CONVERT_VIDEO = gql`
        mutation video($file: Upload!, $frame: String!, $width: String!,
            $height: String!, $color: String!$,format: String!, $convert: String!) {
            convert_video(
                file: $file,
                frame: $frame,
                width: $width,
                height: $height,
                color: $color,
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
export default M_CONVERT_VIDEO
