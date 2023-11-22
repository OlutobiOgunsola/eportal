export const LogNetworkError = function ({message, data, errorData}) {
    return console.error(
        `${(message ? message : 'Error in Network Request')}`,
        {
            errorData
        },
        {
            errorMetadata: {
                data
            }
        }
    )
}