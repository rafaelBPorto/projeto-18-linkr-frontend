import React from "react";
import { useParams } from "react-router-dom";
import PublishPost from "./components/PublishPost/PublishPost";

export default function TimeLine(){

    const {id} = useParams();
    return(
        <>
            Timeline {id}
            <PublishPost />
        </>
    )
}