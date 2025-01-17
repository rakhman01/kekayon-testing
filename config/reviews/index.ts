import http from "config/http";


export function getSearchTours({
  page,
  s,
  location_ids,
  experience_ids,
  service_name,
}: any) {
  const params = {
    ...(s && { s }),
    ...(location_ids && { "location_ids[]": location_ids }),
    ...(experience_ids && { "experience_ids[]": experience_ids }),
    ...(service_name && { service_name }),
    page,
  };
  

  const searchParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  );

  

  return http.get(`/tours`);
}


  export function getDetailTours(params: {
    id: string,
    lang: string
  }) {
    return http.get(`/tours/:${params.id}?lang=${params.lang}`)
  }