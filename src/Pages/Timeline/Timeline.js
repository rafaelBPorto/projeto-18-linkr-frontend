import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleDescriptionPAge } from "../../assets/css/StyleDescriptionPage";
import { StylePage } from "../../assets/css/StylePage";
import Header from "../../Components/Header";
import BASE_URL from "../../constants/URL";
import Post from "./components/Posts/Post";
import PublishPost from "./components/PublishPost/PublishPost";

export default function TimeLine() {

    const token = localStorage.getItem("token")
    console.log(token);

    const [posts, setPosts] = useState();

    async function getPost() {
        try {
            const postsPromisses = await axios.get(`${BASE_URL}/timeline`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPosts(postsPromisses);
            console.log(postsPromisses.data)
        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <>
            <Header />
            <StylePage>
                <StyleDescriptionPAge>
                    timeline
                </StyleDescriptionPAge>
                <PublishPost />
                {posts === undefined ? (
                    <p>carregando...</p>
                ) : (
                    <>
                        {posts.data.map((post, index)=>{
                             <Post
                             key={index}
                             title={post.linkTitle}
                             descriprion={post.linkDescripition}
                             url={post.linkUrl}
                             image={post.linklImage}
                         />
                        })}
                    </>
                )}
            </StylePage>
        </>
    )
}