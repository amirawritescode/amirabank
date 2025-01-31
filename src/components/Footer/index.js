import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItem, FooterLinkTitle, FooterLink, SocialMedias, SocialMediaWrap,WebsiteRights, SocialIcons, SocialIconLink, SocialLogo } from './FooterElements'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>    
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItem>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/'>How it works</FooterLink>
                                <FooterLink to='/'>Testimonial</FooterLink>
                                <FooterLink to='/'>Careers</FooterLink>
                                <FooterLink to='/'>Investors</FooterLink>
                            </FooterLinkItem>
                            <FooterLinkItem>
                                <FooterLinkTitle>Others</FooterLinkTitle>
                                <FooterLink to='/'>Promotions</FooterLink>
                                <FooterLink to='/'>Annoucement</FooterLink>
                                <FooterLink to='/'>Security Awareness</FooterLink>
                                <FooterLink to='/'>Terms and Conditions</FooterLink>
                            </FooterLinkItem>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                <SocialMedias>
                    <SocialMediaWrap>
                        <SocialLogo to = '/' onClick = {toggleHome} >mirabank</SocialLogo>
                        <WebsiteRights>mirabank © All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink>
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedias>
            </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
