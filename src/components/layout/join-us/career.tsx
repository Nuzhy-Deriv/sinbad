import React from 'react'
import styled from 'styled-components'
import { JoinUsContainer, JoinUsInfo, StyledHeader, StyledText, TextContainer } from './home'
import { Button } from 'components/elements'
import { JoinUsImageContainer } from 'components/containers/main'
import Sinbad0 from 'images/common/careers/careers-join-us.png'
import Sinbad from 'images/common/openpositions/join-us-background.png'
import { openPositionActions } from 'common/utility'
import { SectionLabel } from 'components/chunks'
import { Banner } from 'images/common/careers'
import device from 'themes/device'

const Wrapper = styled.div`
    background-color: var(--color-sand-1);
    background-repeat: no-repeat;
    background-image: url(${Sinbad});
    background-position: bottom center;
    background-size: contain;
    width: 100%;
`

const JoinUsWrapper = styled(JoinUsContainer)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 42% 70%;
    width: 100%;
    height: 830px;

    @media ${device.tabletL} {
        height: 970px;
    }
`

const JoinUsCareers = () => {
    return (
        <Wrapper>
            <JoinUsWrapper>
                <JoinUsContainer>
                    <JoinUsInfo>
                        <SectionLabel />
                        <TextContainer padding_bottom="120px">
                            <StyledHeader>Join Our Team!</StyledHeader>
                            <StyledText>
                                Is your dream to build great products using leading technologies?
                                Join Sinbad Software, where creativity, talent, and a passion for
                                challenges come together.
                            </StyledText>
                            <Button label="See Our Open Positions" onClick={openPositionActions} />
                        </TextContainer>
                    </JoinUsInfo>
                    <JoinUsImageContainer
                        src={Sinbad0}
                        max_height="unset"
                        padding_bottom="unset"
                        mobile_pb="unset"
                        width="550px"
                        height="625px"
                    />
                </JoinUsContainer>
            </JoinUsWrapper>
        </Wrapper>
    )
}

export default JoinUsCareers
