import React from "react"
import { StylePublishPost } from "../../../../assets/css/PublishPostStyles/StylePublishPost"
import { StylePublishPostLeft } from "../../../../assets/css/PublishPostStyles/StylePublishPostLeft"
import { StyleUserImg } from "../../../../assets/css/StyleUserImg"
import PublishPostForm from "./PublishPostForm"
export default function PublishPost({setUpdate, user}){

    return(
        <StylePublishPost>
            <StylePublishPostLeft>
                <StyleUserImg  src={user.photo}/>
            </StylePublishPostLeft>
            
            <PublishPostForm setUpdate ={setUpdate}/>
        </StylePublishPost>
    )
}