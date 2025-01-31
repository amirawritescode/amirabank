import React from 'react'
import { HeroContainer,HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements'
import Video from '../../videos/video-6.mp4'
import { Button } from '../ButtonElements'

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type = 'video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Banking is now easy with Mirabank.</HeroH1>
                    <HeroP>Register now to get more discounts when you shop using MiraCard</HeroP>
                    <HeroBtnWrapper>
                        <Button>Register Now! </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
            
        </>
    )
}

export default HeroSection
