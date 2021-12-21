import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text, Heading } from '@pancakeswap/uikit'
// import { useTotalValue } from 'state/farms/hooks'
// import { fetchPoolsTotalStaking } from 'state/pools/fetchPools'
import { fetchPoolsPublicDataAsync } from 'state/pools/index'
import { simpleRpcProvider } from 'utils/providers'
// import { useGetStats } from 'hooks/api'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = async () => {
  const { t } = useTranslation()
  const blockNumber = await simpleRpcProvider.getBlockNumber()
  // const tvl = useTotalValue()
  // const tvl = fetchPoolsTotalStaking()
  const tvl = fetchPoolsPublicDataAsync(blockNumber)
  console.log({ tvl })
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading scale="xl" mb="40px">
            {t('Total Value Locked (TVL)')}
        </Heading>
        <>
          <CardValue value={tvl.toNumber()} prefix="$" decimals={2}/>
          <Text color="text" mt="40px">{t('Across all Farms and Pools')}</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
