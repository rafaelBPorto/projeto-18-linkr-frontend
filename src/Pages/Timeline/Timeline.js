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
            getPost()
    }, [update])

    return (
        <>
            {/* <Header />  */}
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
        </>
    )
}
