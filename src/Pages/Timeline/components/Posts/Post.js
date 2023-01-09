import React from "react";
import { StylePost } from "../../../../assets/css/PostStyles.js/StylePost";
import { StylePostDescription } from "../../../../assets/css/PostStyles.js/StylePostDescription";
import { StylePostIcon, StylePostLeft } from "../../../../assets/css/PostStyles.js/StylePostLeft";
import { StylePostLink, StylePostLinkImg, StylePostLinkText } from "../../../../assets/css/PostStyles.js/StylePostLink";
import { StyleUserImg } from "../../../../assets/css/StyleUserImg";
import trahsIcon from "../../../../assets/imgs/trahsIcon.svg"
import userImg from "../../../../assets/imgs/userImg.svg"
import heartOutline from "../../../../assets/imgs/heartOutline.svg"

export default function Post({title, descripition, url, image}) {
    return (
        <StylePost>

            <StylePostLeft>
                <StyleUserImg src={userImg} />
                <StylePostIcon src={heartOutline}/>
            </StylePostLeft>

            <div>
                <StylePostDescription>
                    <h1>Juvenal Juvêncio <img src={trahsIcon} alt="trash" onClick={() => alert("Exlcuir")} /></h1>
                    <p>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</p>
                </StylePostDescription>
                <StylePostLink>
                    <StylePostLinkText>
                        <h1>{title}</h1>
                        <p>{descripition}</p>
                        <a href={url}>{url}</a>
                    </StylePostLinkText>
                    <StylePostLinkImg src="https://blog.fellyph.com.br/wp-content/uploads/2016/06/react-js.png" />
                </StylePostLink>
            </div>

        </StylePost>
    )
}