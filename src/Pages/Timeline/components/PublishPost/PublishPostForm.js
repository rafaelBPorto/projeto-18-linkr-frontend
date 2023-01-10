import axios from "axios";
import React, { useState } from "react";
import { StylePublishPostForm } from "../../../../assets/css/PublishPostStyles/StylePublishPostForm";
import BASE_URL from "../../../../constants/URL";

export default function PublishPostForm() {
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("")

  const token = localStorage.getItem("token")

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      link,
      description
    }

    try {
      await axios.post(`//localhost:4000/publish-post`, body,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      setLink("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <StylePublishPostForm onSubmit={handleSubmit}>
      <h1> What are you going to share today?</h1>
      <input
        name="link"
        value={link}
        type="url"
        placeholder="https://..."
        onChange={(e) => setLink(e.target.value)}
        required
      />

      <input
        name="description"
        value={description}
        type="text"
        placeholder="Awesome article about #javascript"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="onSubmit">Publish</button>
    </StylePublishPostForm>
  )
}