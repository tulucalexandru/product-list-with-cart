import Button from "./Button"
import { DecrementLogo } from "../svg"
import { IButtonProps } from "../../@types"


const DecrementButton = (props: IButtonProps) => {
  return (
    <Button {...props}>
      <DecrementLogo></DecrementLogo>
    </Button>
  )
}

export default DecrementButton
