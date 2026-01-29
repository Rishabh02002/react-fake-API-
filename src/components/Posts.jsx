import { useEffect, useState } from "react";
import { deletePost, getPosts } from "../api/PostApi";
import { ShowPosts } from "./ShowPosts";
import "../ShowPost.css";
import {Form} from "../components/Form"
import { Button, Col, Container, Input, Label, Row } from "reactstrap";

const Posts = () => {
  const [data, setData] = useState([]);
  const [editData,setEditData]=useState({});
  const getPostData = async () => {
    const response = await getPosts();
    setData(response.data);
  };
  useEffect(() => {
    getPostData();
  }, []);

  const deletePostOperaion = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPost = data.filter((currentPost) => {
          return currentPost.id != id;
        });
        setData(newUpdatedPost);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
const editPostData=(currentEle)=>{
  setEditData(currentEle);
}
  return (
    <>
  <section>
    <Form data={data} setData={setData} editData={editData} setEditData={setEditData}/>
  </section>
      {console.log(data)}
      <div className="Card">
        {data.map((currentEle) => {
          return (
            <div key={currentEle.id} className="Post">
              <ShowPosts post={currentEle} />
              <Button onClick={()=>{editPostData(currentEle)}}>Edit</Button>
              <Button
                onClick={() => {
                  deletePostOperaion(currentEle.id);
                }}
              >
                Delete
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Posts;
