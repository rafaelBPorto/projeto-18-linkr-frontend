import React from "react";
import { StyleDescriptionPAge } from "../../assets/css/StyleDescriptionPage";
import { StylePage } from "../../assets/css/StylePage";
import Header from "../../Contants/Header";
import Posts from "./components/Posts/Post";
import PublishPost from "./components/PublishPost/PublishPost";

export default function TimeLine() {

    return (
        <>
            <Header />

            <StylePage>

                <StyleDescriptionPAge>
                    timeline
                </StyleDescriptionPAge>

                <PublishPost />

                <Posts />
                <Posts />
            </StylePage>
        </>
    )
}