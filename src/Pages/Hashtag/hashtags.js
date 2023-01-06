import { ReactTagify } from "react-tagify";
import styled from "styled-components";
import Header from "../Contants/Header.js";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const posts = [
  { id: 1, description: "lalala #react #teste", user_id: 1 },
  {
    id: 2,
    description: "post1 #react #teste",
    url: "https://www.google.com",
    user_id: 1,
  },
  {
    id: 3,
    description: "post2 #react #teste",
    url: "https://www.google.com",
    user_id: 1,
  },
  {
    id: 4,
    description: "post3 #react #teste",
    url: "https://www.google.com",
    user_id: 1,
  },
  {
    id: 5,
    description: "post4 #react #teste",
    url: "https://www.google.com",
    user_id: 1,
  },
  {
    id: 6,
    description: "post5 #react #teste",
    url: "https://www.google.com",
    user_id: 1,
  },
];

export default function HashtagPage() {
  return (
    <PageContainer>
      <Header />
      <PostsContainer>
        {posts.map((i, idx) => (
          <Post key={idx} description={i.description} url={i.url} />
        ))}
      </PostsContainer>
    </PageContainer>
  );
}

function Post({ description, url }) {
  const tagStyle = {
    fontWeight: 700,
    cursor: "pointer",
  };

  return (
    <PostContainer>
      <UserLeftSide>
        <img src="https://static-cse.canva.com/blob/759727/ComoTirareEditarSuaFotoparaPerfilemRedesSociaisfeaturedimagee1559023010630.jpg" />
        <AiOutlineHeart color={"red"} />
        <AiFillHeart color={"red"} />
      </UserLeftSide>
      <PostInfoRightSide>
        <ReactTagify
          tagStyle={tagStyle}
          tagClicked={(tag) => alert(`você clicou na tag ${tag}`)}
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
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #333;
`;
