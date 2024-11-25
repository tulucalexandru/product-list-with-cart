import { IncrementLogo } from '../svg'
import { Button } from './Button'
import { IExtButtonProps } from '../../@types'

export const IncrementButton = (props: IExtButtonProps) => {
  console.log(props.name)
  return (
    <Button {...props}>
      <IncrementLogo>
      </IncrementLogo>
    </Button>
  )
}
