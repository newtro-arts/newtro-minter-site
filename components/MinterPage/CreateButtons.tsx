import { baseSepolia } from 'viem/chains'
import CreateButton from '../CreateButton'

const CreateButtons = () => (
  <div className="mt-4 flex w-full justify-center">
    <CreateButton chainId={baseSepolia.id}>CREATE</CreateButton>
  </div>
)

export default CreateButtons
