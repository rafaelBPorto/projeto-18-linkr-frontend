import { ReactTagify } from "react-tagify";
import styled from "styled-components";
import Header from "../../Components/Header";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../constants/URL";


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
      <PostsTrends>
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
              likes = {i.likedBy}
            />
          ))}
        </PostsContainer>
       
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
       
      </PostsTrends>
    </PageContainer>
  );
}

export function Post({token, likes, user_id, post_id, description, url, photo, name }) {
  console.log(token);
  const navigate = useNavigate();
  const tagStyle = {
    fontWeight: 700,
    cursor: "pointer",
  };

  const body = {post_id: post_id}

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

        console.log(deslikeResponse.data);
        setLiked(false);
      } else if (!liked) {
        const likeResponse =  await axios.post(`${BASE_URL}/likes`, body,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log(likeResponse.data);
        setLiked(true);
      }
    } catch (err) {
      console.log(err.response.data);
    }
    
    
  }

  return (
    <PostContainer>
      <UserLeftSide>
        <img src={photo} />
        {liked ?
        <AiFillHeart onClick={() => handleLike()} color={"red"} />
         :
         <AiOutlineHeart onClick={() => handleLike()} color={"red"} />
         }
      </UserLeftSide>
      <PostInfoRightSide>
        <p>{name}</p>
        <ReactTagify
          tagStyle={tagStyle}
          tagClicked={(tag) => {
            const newTag = tag.replace("#", "");
            navigate(`/hashtag/${newTag}`);
          }}
        >
          <p>{description}</p>
        </ReactTagify>
      </PostInfoRightSide>
    </PostContainer>
  );
}

export function Trends({trend}) {
  const navigate = useNavigate();
  const tagStyle = {
    fontWeight: 700,
    cursor: "pointer",
  };
  return (
    
    <p>
      <ReactTagify
          tagStyle={tagStyle}
          tagClicked={(tag) => {
            const newTag = tag.replace("#", "");
            navigate(`/hashtag/${newTag}`);
          }}
        >
          <p>{trend}</p>
        </ReactTagify>
     
    </p>
     
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

const PostContainer = styled.div`
  width: 611px;
  height: 276px;
  background-color: #171717;
  border-radius: 16px;
  display: flex;
  color: #b7b7b7;
  font-family: "Lato";
  margin-top: 16px;
`;

const UserLeftSide = styled.div`
  display: flex;
  background-color: #171717;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90px;
  height: 100%;
  border-radius: 16px;
  img {
    margin-top: 40px;
    border-radius: 50%;
    width: 53px;
    height: 53px;
  }
`;

const PostInfoRightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
`;

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #333;
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
