import React from "react"
import { StylePublishPost } from "../../../../assets/css/PublishPostStyles/StylePublishPost"
import { StylePublishPostLeft } from "../../../../assets/css/PublishPostStyles/StylePublishPostLeft"
import { StyleUserImg } from "../../../../assets/css/StyleUserImg"
import userImg from "../../../../assets/imgs/userImg.svg"
export default function PublishPost(){

    return(
        <StylePublishPost>
            <StylePublishPostLeft>
                <StyleUserImg  src={userImg}/>
            </StylePublishPostLeft>
            <div> What are you going to share today?</div>
        </StylePublishPost>
    )
}