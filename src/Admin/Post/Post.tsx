import React from "react";

const Post = ({}) => {
  return (
    <div className="post">
      <div className="post__header">
        <img
          className="post__avatar"
          alt={""}
          src="/static/images/avatar/1.jpg"
        />
        <h3> </h3>
      </div>
      <img className="post__image" src={""} alt="React" />
      <h4 className="post__text">
        <strong></strong>
      </h4>
    </div>
  );
};
export default Post;
