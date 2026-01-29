import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export const getPosts = () => {
  return api.get("/posts");
};
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};
export const addPost=(post)=>{
  return api.post("/posts/",post);
};
export const upadtePost=(id,post)=>
{
  return api.put(`/posts/${id}`,post);
}

