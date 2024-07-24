import React from "react";
import { commentsData } from "../util/helper";
import { IMG_LOGO } from "../util/helper";

const Comments = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-md text-white bg-black rounded-lg py-2 cursor-pointer hover:bg-gray-500 ">
      <img alt="profile-logo" className="w-10 h-10 m-1" src={IMG_LOGO} />
      <div className=" ml-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment?.relies} />
      </div>
    </div>
  ));
};

const CommentsContainer = ({ comments }) => {
  return (
    <div className="m-4 p-2">
      <h1 className="text-2xl font-bold my-1">Comments: {comments}</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
