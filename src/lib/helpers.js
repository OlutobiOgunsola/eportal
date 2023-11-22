import { useNavigate } from "react-router";

export const getNull = function () {
  return null;
}

export const createExploreUrl = function (policy){
  let url = `/explore/${policy}`;
  return url
}