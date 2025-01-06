interface ReviewScore {
  score_total: number;
  total_review: number;
}

interface DataItem {
  id: number;
  object_model: string;
  title: string;
  image: string | null;
  content: string;
  location: any[]; // Update this to a more specific type if known
  is_featured: boolean | null;
  duration: string;
  review_score: ReviewScore;
}

interface ApiResponseTours {
  total: number;
  total_pages: number;
  data: DataItem[];
  status: number;
}


const initialStateTours: ApiResponseTours = {
  total: 0,
  total_pages: 0,
  data: [
    {
      id: 0,
      object_model: "",
      title: "",
      image: null,
      content: "",
      location: [],
      is_featured: null,
      duration: "",
      review_score: {
        score_total: 0,
        total_review: 0,
      },
    },
  ],
  status: 0,
};
