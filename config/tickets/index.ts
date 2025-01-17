import http from "config/http";


export function postSearchTicket( params: any) {
  
  return http.post("/tickets", params);
}
