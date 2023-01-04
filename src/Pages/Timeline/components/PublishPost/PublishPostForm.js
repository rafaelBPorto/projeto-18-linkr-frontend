import React from "react";
import { StylePublishPostForm } from "../../../../assets/css/PublishPostStyles/StylePublishPostForm";

export default function PublishPostForm(){

    return(
     <StylePublishPostForm>
        <h1> What are you going to share today?</h1>
       <input placeholder="http://..."/>
       <input type="text" placeholder="Awesome article about #javascript"/>
       <button>Publish</button>
     </StylePublishPostForm>
    )
}