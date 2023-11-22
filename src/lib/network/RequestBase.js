'use'

import axios from 'axios';
import { LogNetworkError } from './NetworkConsole';

// export const RequestBase = function({requestObject}) { return axios.request().then(({res}) => (console.log(`Network request response`, {
//     responseObject: res}))).catch((err) => (LogNetworkError()))).finally((err)=>(
//     console.log('Network Request Handler Finished', err ? {err: err} : null)
// ))