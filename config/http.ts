import axios from "axios";

// checking token in session storage
let token = null
if (typeof window !== "undefined") {
  token = sessionStorage.getItem('token')
}



// create api instance
const http = axios.create({
  baseURL: (typeof process.env.NEXT_PUBLIC_API_URL != 'undefined' ? process.env.NEXT_PUBLIC_API_URL : ''),
  headers: {
    'Authorization': 'bearer '+token
  }
})

export default http