import React from 'react'


import Icon1 from '../../images/invest.svg'
import Icon2 from '../../images/superwoman.svg'
import Icon3 from '../../images/basketball.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> Our Services </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Marketplace</ServicesH2>
                    <ServicesP>Anyone in the adult population will be able to invest in assets holding cultural significance.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Community</ServicesH2>
                    <ServicesP>Creating a fluid movement between community forums and trading allowing for investors to make informed choices</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Safe Storage</ServicesH2>
                    <ServicesP>Assets will be stored in the requisite conditions to reduce the risk of material deterioration.</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
