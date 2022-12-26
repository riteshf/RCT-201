import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("http://localhost:8080/posts");
  return response.data;
};

export const addPost = async (content) => {
  let response = await axios.post("http://localhost:8080/posts", content);
  return response.data;
};

export const deletePost = async (id) => {
  let response = await axios.delete(`http://localhost:8080/posts/${id}`);
  let data = response.data;
  return data;
};
