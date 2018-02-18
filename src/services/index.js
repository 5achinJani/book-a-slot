//@flow
import axios from "axios";

const apiBaseUrls = {
  prod: "",
  dev: ""
};
const baseUrl = apiBaseUrls.dev;
export const appConst = {
  apiMockTimeout: 2000
};
export type Irequest = {
  subUrl: string,
  method?: string,
  data?: object,
  params?: object,
  headers?: object
};

export const get = request => {
  return commonFetch({ method: "get", ...request });
};

export const post = request => {
  return commonFetch({ method: "post", ...request });
};

export const patch = request => {
  return commonFetch({ method: "patch", ...request });
};

const commonFetch = (request: Irequest) => {
  const { subUrl, method, data = {}, params, headers = {} } = request;
  const url = getFullUrl(subUrl);
  const commonHeaders = getCommonHeaders();
  return axios({
    method,
    url,
    data,
    headers: { ...commonHeaders, ...headers },
    params
  });
};

const getCommonHeaders = () => {
  return {
    "Content-Type": "application/json"
  };
};
const getFullUrl = url => {
  return `${baseUrl}${url}`;
};
