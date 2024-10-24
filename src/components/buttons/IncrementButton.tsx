import { IncrementLogo } from '../svg'
import Button from './Button'
import { IButtonProps } from '../../@types'

const IncrementButton = (props: IButtonProps) => {
  return (
    <Button {...props}>
      <IncrementLogo>
      </IncrementLogo>
    </Button>
  )
}

export default IncrementButton
