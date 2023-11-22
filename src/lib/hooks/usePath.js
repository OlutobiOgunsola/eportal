import { useLocation } from "react-router-dom";


export const useGetPath = function () {
    let pathname = useLocation();
    
    return pathname;
  }