import styled from "styled-components";

const Layout = styled.div`
    width: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media(min-width: 48em){
        flex-direction: row;
    }
`;
const ContentContainer = styled.div`
    width: 90%;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    width: 99%;
`;

const ContainerPost = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
        width: 70%;
        .upload_bt{
            background-color: #ddd;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
            gap: 10px;
            padding: 8px 1rem;
            outline: none;
            width: 146px;
        }
        input[type="text"]{
            padding: 8px 10px;
            width: 100%;
        }
    }
`;

export{
    Layout,
    Wrapper,
    ContentContainer,
    Content,
    ContainerPost
}