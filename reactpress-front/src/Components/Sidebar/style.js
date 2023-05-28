import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #273037;
  height: 100vh;
  padding-top: 40px;
  width: 200px;
  @media(min-width: 48em){
    width: 200px;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarMenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(37 42 46);
  }
  svg {
    margin-right: 12px;
  }

  a {
    text-decoration: none;
    color: #ECEEEE;
    font-size: 16px;
  }
`;

export {
    SidebarContainer,
    SidebarMenu,
    SidebarMenuItem
}