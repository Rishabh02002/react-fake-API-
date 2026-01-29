import { useEffect, useState } from "react";
import { Container, Row, Col, Label, Input, Button } from "reactstrap";
import { addPost, upadtePost } from "../api/PostApi";

export const Form = ({ data, setData, editData, setEditData }) => {
  const [addData, setaddData] = useState({
    title: "",
    body: "",
  });
  const isEmpty = Object.keys(editData).length;

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setaddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //use effect

  useEffect(() => {
    editData &&
      setaddData({
        title: editData.title || "",
        body: editData.body || "",
      });
  }, [editData]);

  const insertPost = async () => {
    try {
      const res = await addPost(addData);
      if (res.status === 201) {
        console.log(res);
        setData([...data, res.data]);
        setaddData({ title: "", body: "" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpadtePost = async () => {
    const res = await upadtePost(editData.id, addData);
    try {
      setData((prev) => {
        return prev.map((current) => {
          return current.id == res.data.id ? res.data : current;
        });
      });
      setaddData({ title: "", body: "" });
      setEditData({});
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;

    if (action == "add") {
      insertPost();
    } else if (action == "edit") {
      handleUpadtePost();
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col sm={{ size: 6, offset: 4 }}>
            <form onSubmit={handleSubmit}>
              <Label>title</Label>
              <Input
                type="text"
                name="title"
                value={addData.title}
                onChange={handleData}
              ></Input>
              <Label>body</Label>
              <Input
                type="text"
                name="body"
                value={addData.body}
                onChange={handleData}
              ></Input>
              <Button type="submit" value={isEmpty ? "edit" : "add"}>
                {isEmpty ? "edit" : "add"}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
