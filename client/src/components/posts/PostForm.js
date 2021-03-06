import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../form/Input";
import Textarea from "../form/Textarea";

const PostForm = ({ post, onChange, onBlur, loading, onSubmit }) => {
   const { title, body, tag, errors } = post;
   return (
      <Container>
         <Row>
            <Col className="mx-auto">
               <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
                  <Input
                     name="title"
                     type="text"
                     placeholder="Enter Post Title"
                     value={title}
                     onChange={onChange}
                     onBlur={onBlur}
                     text={{
                        module: "post",
                        label: "Title",
                        error: errors.title
                     }}
                  />
                  <textArea
                     class="form-control"
                     id="postbody"
                     name="body"
                     style={{ minHeight: 90 }}
                     maxLength="140"
                     placeholder="Your text here.."
                     value={body}
                     onChange={onChange}
                     onBlur={onBlur}
                     text={{
                        module: "post",
                        label: "Description",
                        error: errors.body
                     }}
                  />
                 <Input
                     name="tag"
                     class="form-control"
                     id="tag"
                     type="text"
                     placeholder="Enter Tag"
                     value={tag}
                     onChange={onChange}
                     onBlur={onBlur}
                     text={{
                        module: "post",
                        label: "Tag",
                        error: errors.tag
                     }}
                  />
         
                  <Button
                     variant="outline-info"
                     type="submit"
                     disabled={loading}
                     className="mt-3"
                  >
                     Submit
                  </Button>
               </Form>
            </Col>
         </Row>
      </Container>
   );
};

PostForm.propTypes = {
   post: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired,
   onBlur: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onSubmit: PropTypes.func.isRequired
};

export default PostForm;
