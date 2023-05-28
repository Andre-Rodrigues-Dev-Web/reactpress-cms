import React from 'react';
//Icons
import { FaUser, FaComments, FaPhotoVideo, FaEdit, FaTools} from 'react-icons/fa';
import { AiFillDashboard } from 'react-icons/ai';
import { BiBrush, BiExtension } from 'react-icons/bi';
import { GoSettings } from 'react-icons/go';
import { RiFileCopyLine } from 'react-icons/ri';

import {
    SidebarContainer,
    SidebarMenu,
    SidebarMenuItem
} from "./style"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarMenu>
        <SidebarMenuItem>
          <AiFillDashboard size={18} color="#ECEEEE"/>
          <a href="/">Dashboard</a>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <FaEdit size={18} color='#ECEEEE'/>
          <a href="/posts">Posts</a>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <FaPhotoVideo size={18} color='#ECEEEE'/>
          <a href="/media">Media</a>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <RiFileCopyLine size={18} color='#ECEEEE'/>
          <a href="/media">Pages</a>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <FaComments size={18} color='#ECEEEE'/>
          <a href="/comments">Comments</a>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <BiBrush size={18} color='#ECEEEE'/>
          <a href="/tags">Appearance</a>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <BiExtension size={18} color='#ECEEEE'/>
          <a href="/tags">Plugins</a>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <FaUser size={18} color='#ECEEEE' />
          <a href="/profile">Users</a>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <FaTools size={18} color='#ECEEEE'/>
          <a href="/settings">Tools</a>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <GoSettings size={18} color='#ECEEEE'/>
          <a href="/settings">Settings</a>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
