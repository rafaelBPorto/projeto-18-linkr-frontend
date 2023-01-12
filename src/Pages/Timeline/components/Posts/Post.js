import React from "react";
import { StylePost } from "../../../../assets/css/PostStyles.js/StylePost";
import { StylePostDescription } from "../../../../assets/css/PostStyles.js/StylePostDescription";
import { StylePostIcon, StylePostLeft } from "../../../../assets/css/PostStyles.js/StylePostLeft";
import { StylePostLink, StylePostLinkImg, StylePostLinkText } from "../../../../assets/css/PostStyles.js/StylePostLink";
import { StyleUserImg } from "../../../../assets/css/StyleUserImg";
import trahsIcon from "../../../../assets/imgs/trahsIcon.svg"
import heartOutline from "../../../../assets/imgs/heartOutline.svg"
import axios from "axios";
import BASE_URL from "../../../../constants/URL";


export default function Post( {post, setUpdate, token, user} ) {

    const { id, user_id, description, user_name,user_photo , link_title, link_descripition, link_url, link_image} = post;
    const userId = user.id;


    const authorization = {
        headers: {
            authorization: `Bearer ${token}`,
        }
    };


    async function deletePost(postId) {
      
        try {
            await axios.delete(`${BASE_URL}/delete-post/${postId}`,
                authorization
            );
            
        } catch (error) {
            alert("Não foi possível excluir o post!")
        }
        
        setUpdate(true)

    }

    return (
        <StylePost>

            <StylePostLeft>
                <StyleUserImg src={user_photo} />

                <StylePostIcon src={heartOutline} />
            </StylePostLeft>

            <div>
                <StylePostDescription>
                    <h1>

                        {user_name}
                        {userId=== user_id && (
                            <img src={trahsIcon} alt="trash" onClick={() => deletePost(id)} />
                        )}

                      

                    </h1>
                    <p>{description}</p>
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