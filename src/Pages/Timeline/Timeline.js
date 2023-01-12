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
    const user = JSON.parse(localStorage.getItem("userInfo"))

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
            setUpdate(true);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        if(!update){
            getPost()
        }
    }, [getPost, update])

    return (
        <>
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
                        {posts.map((post) => <Post
                            key={post.id}
                            postUserId={post.user_id}
                            postDescription={post.description}
                            link_description={post.link_description}
                            link_url={post.link_url}
                            link_title={post.link_title}
                            link_image={post.link_image}
                            postUserName={post.user_name}
                            postUserPhoto={post.user_photo}
                            user={user}

                        />)}
                    </>
                )}
            </StylePage>
        </>
    )
}
