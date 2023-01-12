import React, { useEffect, useState } from "react";
import { StylePost } from "../../../../assets/css/PostStyles.js/StylePost";
import { StylePostDescription } from "../../../../assets/css/PostStyles.js/StylePostDescription";
import {
  StylePostIcon,
  StylePostLeft,
} from "../../../../assets/css/PostStyles.js/StylePostLeft";
import {
  StylePostLink,
  StylePostLinkImg,
  StylePostLinkText,
} from "../../../../assets/css/PostStyles.js/StylePostLink";
import { StyleUserImg } from "../../../../assets/css/StyleUserImg";
import trahsIcon from "../../../../assets/imgs/trahsIcon.svg";
import heartOutline from "../../../../assets/imgs/heartOutline.svg";
import heartRed from "../../../../assets/imgs/heartRed.svg";
import axios from "axios";
import BASE_URL from "../../../../constants/URL";
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { tagStyle } from "../../../../Components/styleTagify";

export default function Post({ post, setUpdate, token, user }) {
  const {
    id,
    user_id,
    description,
    name,
    photo,
    link_title,
    link_descripition,
    link_url,
    link_image,
    likedById
  } = post;
  const userId = user.id;
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    likedById.map((i) => (i === userId) ? setLiked(true) : "")
}, [])
 
async function handleLike () {
    const body = {post_id: id}

    try {
      if (liked) {
       await axios.delete(`${BASE_URL}/likes`,
        {
            headers: {
            Authorization: `${token}`,
            post_id: id
          }
        });


        setLiked(false);
      } else if (!liked) {
        await axios.post(`${BASE_URL}/likes`, body,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setLiked(true);
      }
    } catch (err) {
      console.log(err.response.data);
    } 
  }

  

  async function deletePost(postId) {
    const authorization = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      
    try {
      await axios.delete(`${BASE_URL}/delete-post/${postId}`, authorization);
    } catch (error) {
      alert("Não foi possível excluir o post!");
    }

    setUpdate(true);
  }

  return (
    <StylePost>
      <StylePostLeft>
        <StyleUserImg src={photo} />

        {liked ?
        <StylePostIcon onClick={() => handleLike()} src={heartRed} />:
        <StylePostIcon onClick={() => handleLike()} src={heartOutline} />}
       
      </StylePostLeft>

      <div>
        <StylePostDescription>
          <h1>
            {name}
            {userId === user_id && (
              <img src={trahsIcon} alt="trash" onClick={() => deletePost(id)} />
            )}
          </h1>


          <ReactTagify
            tagStyle={tagStyle}
            tagClicked={(tag) => {
              const newTag = tag.replace("#", "");
              navigate(`/hashtag/${newTag}`);
            }}
          >
            <p>{description}</p>
          </ReactTagify>

          
        </StylePostDescription>
        <StylePostLink
          href={link_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StylePostLinkText>
            <h1>{link_title}</h1>
            <h2>{link_descripition}</h2>
            <p>{link_url}</p>
          </StylePostLinkText>
          <StylePostLinkImg src={link_image} />
        </StylePostLink>
      </div>
    </StylePost>
  );
}
