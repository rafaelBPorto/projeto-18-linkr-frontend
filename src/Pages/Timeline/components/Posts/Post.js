import React from "react";
import { StylePost } from "../../../../assets/css/PostStyles.js/StylePost";
import { StylePostDescription } from "../../../../assets/css/PostStyles.js/StylePostDescription";
import { StylePostIcon, StylePostLeft } from "../../../../assets/css/PostStyles.js/StylePostLeft";
import { StylePostLink, StylePostLinkImg, StylePostLinkText } from "../../../../assets/css/PostStyles.js/StylePostLink";
import { StyleUserImg } from "../../../../assets/css/StyleUserImg";
import trahsIcon from "../../../../assets/imgs/trahsIcon.svg"
import userImg from "../../../../assets/imgs/userImg.svg"
import heartOutline from "../../../../assets/imgs/heartOutline.svg"

export default function Post({postDescription, link_title, link_descripition, link_url, link_image}) {
    return (
        <StylePost>

            <StylePostLeft>
                <StyleUserImg src={userImg} />
                <StylePostIcon src={heartOutline}/>
            </StylePostLeft>

            <div>
                <StylePostDescription>
                    <h1>Juvenal Juvêncio <img src={trahsIcon} alt="trash" onClick={() => alert("Exlcuir")} /></h1>
                    <p>{postDescription}</p>
                </StylePostDescription>
                <StylePostLink href={link_url} target="_blank" rel="noopener noreferrer">
                    <StylePostLinkText>
                        <h1>{link_title}</h1>
                        <h2>{link_descripition}</h2>
                        <p>{link_url}</p>
                    </StylePostLinkText>
                    <StylePostLinkImg src={link_image} />
                
                </StylePostLink>
            </div>

        </StylePost>
    )
}