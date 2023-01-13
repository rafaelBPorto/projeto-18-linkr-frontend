import axios from "axios";
import React, { useState } from "react";
import { StylePublishPostForm } from "../../../../assets/css/PublishPostStyles/StylePublishPostForm";
import BASE_URL from "../../../../constants/URL";

export default function PublishPostForm({setUpdate}) {
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [disabled, setDisabled] = useState(false);

  const token = localStorage.getItem("token")

  async function handleSubmit(e) {
    console.log('clicou no submit')
    e.preventDefault();


    const body = {
      link,
      description
    }

    try {
      setDisabled(true);
      await axios.post(`${BASE_URL}/publish-post`, body,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      setLink("");
      setDescription("");
      setUpdate(true);
      setDisabled(false);
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
      <button disabled={disabled} type="onSubmit">Publish</button>
    </StylePublishPostForm>
  )
}