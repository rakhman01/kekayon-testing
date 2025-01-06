import http from "config/http";


export function getSearchExperiences(params: {
    page: number,
    s: string
  }) {
    return http.get(`/experiences?page=${params.page}&s=${params.s}`)
  }

  export function getDetailExperiences(params: {
    id: string,
    lang: string
  }) {
    return http.get(`/experiences/:${params.id}?lang=${params.lang}`)
  }

  export function getCategoryExperiences(params: {
    id: string,
    lang: string
  }) {
    return http.get(`/experiences/experiences/:${params.id}?lang=${params.lang}`)
  }
  export function getCategory() {
    return http.get(`/experiences/category`)
  }