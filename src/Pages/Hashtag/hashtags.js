import styled from "styled-components";
import Header from "../../Components/Header";
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../constants/URL";
import { StylePage } from "../../assets/css/StylePage";
import Post from "../Timeline/components/Posts/Post.js";
import { StyleDescriptionPAge } from "../../assets/css/StyleDescriptionPage";
import { Trend } from "../../Components/Trends/Trends.js";
import { TrendsContainer } from "../../Components/Trends/trendStyle.js";

export default function HashtagPage() {
  const { hashtag } = useParams();
  const [posts, setPosts] = useState([]);
  const [trends, setTrends] = useState([]);
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('userInfo'));


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
        <StyleDescriptionPAge>
        # {hashtag}
        </StyleDescriptionPAge>
          {posts.map((i, idx) => (
            <Post
              token = {token}
              user={user}
              key={idx}
              post={i}
            />
          ))}
      </StylePage>
      <TrendsContainer>
        <h1>Trending</h1>
        <hr></hr>
        <div>
        {trends.map((i, idx) => (
        <Trend key = {idx}
                trend = {i.trend}/>
       ))}
        </div>
        
      </TrendsContainer>
    </PageContainer>
  );
}




export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
`;

