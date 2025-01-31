import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {

    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SideBarWrapper>
                    <SidebarMenu>
                        <SidebarLink to = 'about'  onClick={toggle}>About</SidebarLink>
                        <SidebarLink to = 'discover'  onClick={toggle}>Discover</SidebarLink>
                        <SidebarLink to = 'services'  onClick={toggle}>Services</SidebarLink>
                        <SidebarLink to = 'sidebar'  onClick={toggle}>SignIn</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to = '/signin'>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SideBarWrapper>
            </SidebarContainer>
            
        </>
    )
}

export default Sidebar
