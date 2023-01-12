import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { tagStyle } from "../styleTagify";


  export function Trend({trend}) {
    const navigate = useNavigate();
   
  
    return (
        <>
        <ReactTagify
            tagStyle={tagStyle}
            tagClicked={(tag) => {
              const newTag = tag.replace("#", "");
              navigate(`/hashtag/${newTag}`);
            }}
          >
            <p>{trend}</p>
        </ReactTagify>
        </>
    );
    
  }