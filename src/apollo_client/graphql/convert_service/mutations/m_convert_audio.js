import { gql } from '@apollo/client'

const M_CONVERT_AUDIO = gql`
        mutation audio($file: Upload!, $acodex: String!, $bitrate: String!,
            $sample_rate: String!, $audio_channel: String!, $format: String!, $convert: String!) {
            convert_audio(
                file: $file,
                acodex: $acodex,
                bitrate: $bitrate,
                sample_rate: $sample_rate,
                audio_channel: $audio_channel,
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
export default M_CONVERT_AUDIO
