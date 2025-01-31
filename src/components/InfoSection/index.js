import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap,Column2, ImgWrap, Img} from './infoElements'
import { Button } from '../ButtonElements'
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, lightTextDesc, description, buttonLabel, img, alt}) => {
    return (
        <>
            <InfoContainer lightBg = {lightBg} id = {id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText = {lightText}>{headLine}</Heading>
                                <Subtitle lightTextDesc = {lightTextDesc}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='/'>{buttonLabel} </Button>
                                </ BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img  imgStart = {imgStart} src ={img} alt = {alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
