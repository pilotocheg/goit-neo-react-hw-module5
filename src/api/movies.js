import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] =
  "Client-ID EVaeWSZXnLoA0M4Kztk372lz7uPdfKkK0mJlTwvHpo4";
axios.defaults.headers.common["Accept-Version"] = "v1";

export const fetchImages = async (query, page, pageSize) => {
  try {
    const response = await axios.get("/search/photos", {
      params: { query, page, per_page: pageSize },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
