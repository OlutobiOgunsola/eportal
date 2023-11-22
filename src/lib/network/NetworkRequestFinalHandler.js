export const NetworkRequestExitHandler = function({err, data}) {
    return console.log(
        'Network request exit',
        {
            errorData: err ? err : null,
            payload: data ? data : null
        },

    )
};

export const NetworkRequestResponseHandler = function(res) {
   if(res.statusCode !==200) throw new Error('Error in Network Request');

   return {
        message: 'Request Success',
        responseData: res.data.data 
   }
}