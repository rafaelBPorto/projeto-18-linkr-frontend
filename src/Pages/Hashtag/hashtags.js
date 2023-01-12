import { ReactTagify } from "react-tagify";
import styled from "styled-components";
import Header from "../../Components/Header";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../constants/URL";
import { StylePostDescription } from "../../assets/css/PostStyles.js/StylePostDescription.js";
import { StylePostLink, StylePostLinkImg, StylePostLinkText } from "../../assets/css/PostStyles.js/StylePostLink.js";
import { StylePost } from "../../assets/css/PostStyles.js/StylePost.js";
import { StylePostIcon, StylePostLeft } from "../../assets/css/PostStyles.js/StylePostLeft";
import { StyleUserImg } from "../../assets/css/StyleUserImg";
import { StylePage } from "../../assets/css/StylePage";


export default function HashtagPage() {
  const { hashtag } = useParams();
  const [posts, setPosts] = useState([]);
  const [trends, setTrends] = useState([]);
  const token = localStorage.getItem('token');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  
  async function getPost() {
    try {
      const getPosts = await axios.get(`${BASE_URL}/hashtag/${hashtag}`, {});
      setPosts(getPosts.data);
      const getTrends = await axios.get(`${BASE_URL}/trends`, {});
      setTrends(getTrends.data);
      
    } catch (err) {
       console.log(err.response?.data);
    }
  }



  useEffect(() => {
    getPost();
  }, [hashtag]);

  return (
    <PageContainer>
      {/* <Header /> */}
      <StylePage>
        <PostsContainer>
          <h1># {hashtag}</h1>
          {posts.map((i, idx) => (
            <Post
              token = {token}
              user_id={userInfo.id}
              key={idx}
              post_id={i.id}
              name={i.name}
              photo={i.photo}
              description={i.description}
              url={i.url}
              likes = {i.likedById}
              link_description={i.link_description}
              link_url={i.link_url}
              link_title={i.link_title}
              link_image={i.link_image}
            />
          ))}
        </PostsContainer>
       
        
       
      </StylePage>
      <TrendsContainer>
        <h1>Trending</h1>
        <hr></hr>
        <div>
        {trends.map((i, idx) => (
        <Trends key = {idx}
                trend = {i.trend}/>
       ))}
        </div>
        
        </TrendsContainer>
    </PageContainer>
  );
}

export function Post({token, likes, user_id, post_id, description, url, photo, name, link_descripition, link_title, link_url, link_image }) {
  const navigate = useNavigate();
  const tagStyle = {
    fontWeight: 700,
    cursor: "pointer",
  };


  const body = {post_id: post_id}

  console.log(typeof likes);

  useEffect(() => {
      likes.map((i) => (i === user_id) ? setLiked(true) : "")
  }, [])

  const [liked, setLiked] = useState(false);

  async function handleLike () {
    try {
      if (liked) {
        const deslikeResponse =  await axios.delete(`${BASE_URL}/likes`,
        {
            headers: {
            Authorization: `${token}`,
            post_id: post_id
          }
        });


        setLiked(false);
      } else if (!liked) {
        const likeResponse =  await axios.post(`${BASE_URL}/likes`, body,
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



  return (
    <StylePost>
      <StylePostLeft>
        <StyleUserImg src={photo} />
        
        {liked ?
        <AiFillHeart onClick={() => handleLike()} color={"red"} />
         :
         <AiOutlineHeart onClick={() => handleLike()} color={"red"} />
         }
      </StylePostLeft>

      <div>
        <StylePostDescription>
          <h1>{name}</h1>
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
  );
}

export function Trends({trend}) {
  const navigate = useNavigate();
  const tagStyle = {
    fontWeight: 700,
    cursor: "pointer",
  };

  return (
      <ReactTagify
          tagStyle={tagStyle}
          tagClicked={(tag) => {
            const newTag = tag.replace("#", "");
            navigate(`/hashtag/${newTag}`);
          }}
        >
          <p>{trend}</p>
        </ReactTagify>
  );
}

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    color: white;
    align-self: center;
    margin: 50px 400px 50px 0px;
  }
`;



const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const PostsTrends = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  
`;

const TrendsContainer = styled.div`
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-self: flex-end;
  padding: 30px;
  align-items: flex-start;
  padding-left: 20px;
  background-color: #171717;
  border-radius: 16px;
  margin-left: 100px;
  margin-top: 280px;
  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    color: white;
  }
  hr {
    height: 0px;

  border: 1px solid #484848;
    width: 100%;
  }
  p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  color: white;
  }
  div {
    margin-top: 30px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
