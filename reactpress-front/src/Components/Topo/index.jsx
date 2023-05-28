import React from "react"
import { FaComments, FaHome, FaPlus, FaWordpress } from 'react-icons/fa';
import styled from "styled-components";

const ContainerTopo = styled.div`
    background-color: #273037;
    width: 100%;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px;
    width: 99%;
`;

const LeftContent = styled.div`
    min-width: 30%;
`;

const Actions = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    li{
        color: #fff;
        display: flex;
        align-items: center;
        gap: 9px;
    }
`;
const Topo = () => {
    return (
        <ContainerTopo>
            <Container>
                <LeftContent>
                    <Actions>
                        <li>
                            <FaWordpress size={30}/>
                        </li>
                        <li>
                            <FaHome size={18}/>
                            Meu Site
                        </li>
                        <li className="comments">
                            <FaComments size={18}/>
                            0
                        </li>
                        <li>
                            <FaPlus size={18}/>
                            New
                        </li>
                    </Actions>
                </LeftContent>
            </Container>
        </ContainerTopo>
    );
}

export default Topo