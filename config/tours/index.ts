import http from "config/http";


export function getSearchTours(params: {
    page: number,
    s: string
  }) {
    return http.get(`/tours`)
  }

  export function getDetailTours(params: {
    id: string,
    lang: string
  }) {
    return http.get(`/tours/${params.id}?lang=${params.lang}`)
  }
  export function getDetailSummaryTours(params: {
    id: string,
    lang: string
  }) {
    return http.get(`/tours/${params.id}/summary?lang=${params.lang}`)
  }

  export function getCategoryTours() {
    return http.get(`/experiences/category`)
  }