import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleDescriptionPAge } from "../../assets/css/StyleDescriptionPage";
import { StylePage } from "../../assets/css/StylePage";
import Header from "../../Components/Header";
import { Trend } from "../../Components/Trends/Trends.js";
import { TrendsContainer } from "../../Components/Trends/trendStyle.js";
import BASE_URL from "../../constants/URL";
import { PageContainer } from "../Hashtag/hashtags.js";
import Post from "./components/Posts/Post";
import PublishPost from "./components/PublishPost/PublishPost";

export default function TimeLine() {

    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("userInfo"))
    const [trends, setTrends] = useState([]);
    const [posts, setPosts] = useState();
    const [update, setUpdate] = useState(false);

    async function getPost() {
        try {
            const postsPromisses = await axios.get(`${BASE_URL}/timeline`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPosts(postsPromisses.data);
            const getTrends = await axios.get(`${BASE_URL}/trends`, {});
            setTrends(getTrends.data);

            setUpdate(true);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
            getPost()
    }, [update])

    return (
        <>
        <PageContainer>
            <Header /> 
            <StylePage>
                <StyleDescriptionPAge>
                    timeline
                </StyleDescriptionPAge>
                <PublishPost user={user}/>
                {(posts === null || posts === undefined) ? (
                    <p>carregando...</p>
                ) : (
                    <>
                        {posts.map((post, idx) => <Post
                            key={idx}
                            post ={post}
                            user={user}
                            token={token}
                            setUpdate={setUpdate}

                        />)}
                    </>
                )}
                
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
        </>
    )
}

