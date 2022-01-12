import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll/modules'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialIcons,
    SocialIconLink,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights
} from './footerElements'




const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us</FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">Contact us</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>

                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>KeepsaKe</SocialLogo>
                        <WebsiteRights>KeepsaKe Ⓒ {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/KeepsaKeGroup" targets="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/keepsakeofficial_" targets="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/company/keepsakeaustralia" targets="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
