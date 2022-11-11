import axios from "axios";
import React, { useState } from "react";
import { json } from "react-router-dom";

const FormNew = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDAte] = useState("");
  const [isPending, setIsPending] = useState(false);

  const addNew = async (newData) => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(newData);

    let reqOptions = {
      url: "http://localhost:8000/news",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    return response;
  };
  const sendInformation = async (e) => {
    e.preventDefault();
    const newInfo = { id, title, imageUrl, description, date, author };
    setIsPending(true);
    const response = await addNew(newInfo);

    if (!response.status) {
      return;
    }

    setIsPending(false);
    setAuthor("");
    setId("");
    setTitle("");
    setImageUrl("");
    setDAte("");
    setDescription("");
    alert("New Added");
  };
  return (
    <form className="container" onSubmit={sendInformation}>
      <div className="mb-3 row">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          id
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
      </div>
      <div className="mb-3 row">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="mb-3 row">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Image Url
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div className="mb-3 row">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="exampleFormControlInput1"
          onChange={(e) => setDAte(e.target.value)}
          value={date}
        />
      </div>
      <div className="mb-3 row">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          {isPending ? "Adding New" : "Send"}
        </button>
      </div>
    </form>
  );
};

export default FormNew;
