import http from "config/http";


export function getSearchTours(params: {
    page: number,
    s: string,
    service_name: string
  }) {
    return http.get(`/tours?service_name=${params.service_name}`)
  }

  export function getDetailTours(params: {
    id: string,
    lang: string
  }) {
    return http.get(`/tours/:${params.id}?lang=${params.lang}`)
  }