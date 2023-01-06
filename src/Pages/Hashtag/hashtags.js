import { ReactTagify } from "react-tagify";
import styled from "styled-components";
import Header from "../Contants/Header.js";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function HashtagPage() {

  const {hashtag} = useParams();
  const [posts, setPosts] = useState([]);
  async function getPost() {
    try {
      const response = await axios.get(`//localhost:4000/hashtag/${hashtag}`);
      setPosts(response.data);
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
   getPost();
  }, [hashtag])

  return (
    <PageContainer>
      <Header />
      <PostsContainer>
        {posts.map((i, idx) => (
          <Post key={idx} name={i.name} photo={i.photo} description={i.description} url={i.url} />
        ))}
      </PostsContainer>
    </PageContainer>
  );
}

function Post({ description, url, photo, name }) {
  const navigate = useNavigate();
  const tagStyle = {
    fontWeight: 700,
    cursor: "pointer",
  };

  return (
    <PostContainer>
      <UserLeftSide>
        <img src={photo} />
        <AiOutlineHeart color={"red"} />
        <AiFillHeart color={"red"} />
      </UserLeftSide>
      <PostInfoRightSide>
        <p>{name}</p>
        <ReactTagify
          tagStyle={tagStyle}
          tagClicked={(tag) => {
            const newTag = tag.replace('#', '');
            navigate(`/hashtag/${newTag}`);
          }}
        >
          <p>{description}</p>
        </ReactTagify>
      </PostInfoRightSide>
    </PostContainer>
  );
}

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
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
