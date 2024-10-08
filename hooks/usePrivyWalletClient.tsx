import { useEffect, useState } from 'react'
import { WalletClient, createWalletClient, custom } from 'viem'
import useConnectedWallet from './useConnectedWallet'

const usePrivyWalletClient = (chain) => {
  const { connectedWallet, wallet } = useConnectedWallet()
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null)

  useEffect(() => {
    const init = async () => {
      const provider = await wallet.getEthereumProvider()
      const response = createWalletClient({
        chain,
        account: connectedWallet as `0x${string}`,
        transport: custom(provider),
      })
      setWalletClient(response)
    }

    if (!connectedWallet || !chain) return
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedWallet, chain])

  return { walletClient }
}

export default usePrivyWalletClient
