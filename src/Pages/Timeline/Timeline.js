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
    const [update, setUpdate] = useState(false);

    async function getPost() {
        try {
            const postsPromisses = await axios.get(`//localhost:4000/timeline`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPosts(postsPromisses.data);
            setUpdate(true);
            console.log(postsPromisses.data)
        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        getPost()
    }, [update])

    return (
        <>
            <Header /> 
            <StylePage>
                <StyleDescriptionPAge>
                    timeline
                </StyleDescriptionPAge>
                <PublishPost />
                {(posts === null || posts === undefined) ? (
                    <p>carregando...</p>
                ) : (
                    <>
                    {posts.map((i) => <Post description = {i.linkDescription}
                    url = {i.linkUrl}
                    title = {i.linkTitle}
                    image = {i.linkImage}
                    />)}
                    </>
                )}
            </StylePage>
        </>
    )
}
