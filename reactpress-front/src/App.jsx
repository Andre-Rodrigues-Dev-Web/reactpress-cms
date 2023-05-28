import React from "react"
import Sidebar from "./Components/Sidebar";
import styled from "styled-components"
import Topo from "./Components/Topo";

const LayoutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const App = () => {
    return(
        <LayoutContainer>
            <Topo/>
            <Sidebar/>
        </LayoutContainer>
    )
}

export default App;