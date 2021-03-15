import React from 'react'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'

const StyledTwitterCard = styled(Card)`
  background: linear-gradient(90deg, #1d3b44, #2f8381 20%);
  margin-left: auto;
  margin-right: auto;
`

const TwitterCard = () => {
  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="lg" mb="5px">
          Buy <span style={{ color: '#0c0520' }}>CLIMB</span> and get
        </Heading>
        <Heading size="lg" mb="5px">
          get <span style={{ color: '#0c0520' }}>returns</span> like a
        </Heading>
        <Heading size="lg" mb="5px">
          mutual fund trought
        </Heading>
        <Heading size="lg" mb="5px">
          an <span style={{ color: '#0c0520' }}>exclusive</span>
        </Heading>
        <Heading size="lg">
          <span style={{ color: '#0c0520' }}>limited offer token</span>
        </Heading>
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
