export interface SearchApiResponse {
    total: number;
    total_pages: number;
    data: Array<{
      id: number;
      title: string;
      image: string | null;
      content: string;
    }>;
    status: number;
  }

 export interface DetailLocationResponse {
    data: {
      id: number;
      title: string;
      image: string;
      content: string;
      map_lat: string;
      map_lng: string;
      map_zoom: number;
      banner_image: string;
    };
    status: number;
  }
  

  
 export const initialStateSearchLocation: SearchApiResponse = {
    total: 0,
    total_pages: 0,
    data: [
      {
        id: 0,
        title: "",
        image: "",
        content: "",
      },
    ],
    status: 0,
  };

 export const initialStateDetailLocation: DetailLocationResponse = {
    data: {
      id: 0,
      title: "",
      image: "",
      content: "",
      map_lat: "",
      map_lng: "",
      map_zoom: 0,
      banner_image: "",
    },
    status: 0,
  };
  
  