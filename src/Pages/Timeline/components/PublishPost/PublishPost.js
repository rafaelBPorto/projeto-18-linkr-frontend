import React from "react"
import { StylePublishPost } from "../../../../assets/css/PublishPostStyles/StylePublishPost"
import { StylePublishPostLeft } from "../../../../assets/css/PublishPostStyles/StylePublishPostLeft"
import { StyleUserImg } from "../../../../assets/css/StyleUserImg"
import userImg from "../../../../assets/imgs/userImg.svg"
import PublishPostForm from "./PublishPostForm"
export default function PublishPost({user}){

    return(
        <StylePublishPost>
            <StylePublishPostLeft>
                <StyleUserImg  src={user.photo}/>
            </StylePublishPostLeft>
            
            <PublishPostForm />
        </StylePublishPost>
    )
}