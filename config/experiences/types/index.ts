export interface Author {
    display_name: string;
    avatar_url: string;
  }
  
export  interface Category {
    id: number;
    name: string;
    slug: string;
    uri: string
  }
  
export  interface DataItem {
    id: number;
    slug: string;
    title: string;
    content: string;
    image_id: number;
    image_url: string;
    category: Category;
    created_at: string;
    author: Author;
    tags?: string[];
  }
  
export  interface ApiResponseExperiences {
    total: number;
    total_pages: number;
    data: DataItem[];
  }

export interface ApiResponseDetailExperiences {
    data: DataItem;
    status: number;
  }
  
  
  interface CategoriesApiResponse {
    data: Category[];
    status: number;
  }
  
  

 export const initialStateExperiences: ApiResponseExperiences = {
    total: 0,
    total_pages: 0,
    data: [],
  };
  

  export const initialStateDetailExperiences: ApiResponseDetailExperiences = {
    data: {
      id: 0,
      slug: "",
      title: "",
      content: "",
      image_id: 0,
      image_url: "",
      category: {
        id: 0,
        name: "",
        slug: "",
        uri: ''
      },
      created_at: "",
      author: {
        display_name: "",
        avatar_url: ""
      },
      tags: []
    },
    status: 0
  };

  const initialState: CategoriesApiResponse = {
    data: [
      {
          name: "",
          id: 0,
          uri: "",
          slug: ""
      }
    ],
    status: 0
  };
  
  