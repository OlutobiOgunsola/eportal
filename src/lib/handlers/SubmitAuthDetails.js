import axios from "axios";
import { NetworkRequestExitHandler, NetworkRequestResponseHandler } from "../network/NetworkRequestFinalHandler";

export const SubmitAuthDetails = function({authDetails}) {
    return axios.post(`${process.env.REACT_APP_CONNECT_API_URI}`, {
        originApplication: `${process.env.REACT_APP_REGIC_ID}`, authData: {
            authDetails
        }
    },{authDetails: authDetails}).then(function(response) {
        return NetworkRequestResponseHandler(response);
    }).finally(function(err) {
        return NetworkRequestExitHandler({
            message: 'Network request finished successfully',
            errorData: err ? err : null,
        })
    })
}