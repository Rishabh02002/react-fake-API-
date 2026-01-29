import { useState } from "react";
import { Container, Row, Col, Label, Input } from "reactstrap";
import { addPost } from "../api/PostApi";

export const Form = ({ data, setData }) => {
  const [addData, setaddData] = useState({
    title: "",
    body: "",
  });

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
  const insertPost = async (e) => {
    try {
      e.preventDefault();
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
  return (
    <>
      <Container>
        <Row>
          <Col sm={{ size: 6, offset: 4 }}>
            <form onSubmit={insertPost}>
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
              <Input type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
