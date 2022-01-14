import React, { useState } from 'react';
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './FirstPageComponents'
import { Button1 } from '../ButtonElement';



const FirstPage = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Cultural investment ... Together</HeroH1>
                <HeroP> Come and join Australia's First Personal Interest Investment Platform</HeroP>
                <HeroBtnWrapper>
                    <Button1
                        to="/signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={-80}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button1>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    )
}

export default FirstPage