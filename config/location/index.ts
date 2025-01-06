import http from "config/http";


export function getSearchLocation(params: {
    page: number,
    s: string
  }) {
    return http.get(`/locations?page=${params.page}&s=${params.s}`)
  }

  export function getDetailLocation(params: {
    id: string,
    lang: string
  }) {
    return http.get(`/location/:${params.id}?lang=${params.lang}`)
  }