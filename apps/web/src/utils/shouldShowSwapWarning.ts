import { Token } from '@pancakeswap/sdk'
import SwapWarningTokens from 'config/constants/swapWarningTokens'

const shouldShowSwapWarning = (chainId: number, swapCurrency: Token) => {
  if (SwapWarningTokens[chainId]) {
    const swapWarningTokens = Object.values(SwapWarningTokens[chainId])
    return swapWarningTokens.some((warningToken) => warningToken.equals(swapCurrency))
  }

  return []
}

export default shouldShowSwapWarning
