import React from 'react'
import styled from 'styled-components'
import { Card, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  padding: 25px;
  justify-content: space-between;
  background: linear-gradient(123deg, #182432 60%, #297d77);
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard mb="50px">
      <Heading size="lg">{TranslateString(999, 'Total Value Locked (TVL)')}</Heading>
      <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} fontSize="25px" />
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
