import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/myHooks";
import { createStory } from "../../app/myReducers/storyReducer";
const initialPayload = {
  title: "",
  caption: "",
  content: "",
};
function CreateStoryForm() {
  const [payload, setPayload] = useState(initialPayload);
  const user = useAppSelector((state) => state.userReducer);
  const story = useAppSelector((state) => state.storyReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setPayload({
      title: story.title,
      caption: story.caption,
      content: story.content,
    });
  }, [user.isLoggedIn]);
  const handleOnchange = (key: any) => (event: any) => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      [key]: event.target.value,
    }));
  };
  function submitHandler(e: any) {
    e.preventDefault();
    dispatch(createStory({ ...story, ...payload }));
    Router.push("/stories/create/customize");
  }
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <form
        onSubmit={submitHandler}
        className="w-full flex items-center justify-center"
      >
        <div className="flex flex-col w-full max-w-lg">
          <label className="label" htmlFor="title">
            Title*
          </label>
          <input
            value={payload.title}
            className="input"
            maxLength={100}
            onChange={handleOnchange("title")}
            required
            placeholder="Enter title"
            type="text"
            name="title"
            id="title"
          />
          <label className="label" htmlFor="content">
            Content*
          </label>
          <textarea
            className="input resize-none"
            onChange={handleOnchange("content")}
            required
            maxLength={300}
            placeholder="Enter content"
            rows={10}
            cols={10}
            value={payload.content}
            name="content"
            id="content"
          />
          <label className="label" htmlFor="caption">
            Caption*
          </label>
          <input
            value={payload.caption}
            required
            maxLength={100}
            onChange={handleOnchange("caption")}
            type="text"
            placeholder="Enter caption"
            className="input"
            name="caption"
            id="caption"
          />
          <div className="flex flex-col py-4 w-full gap-2">
            <button className="button button-primary" type="submit">
              Create
            </button>
            <button className="button button-ghost" type="reset">
              Reset
            </button>
          </div>
        </div>
      </form>
      <small className="text-gray-600 py-4">* marked fields are required</small>
    </div>
  );
}

export default CreateStoryForm;
