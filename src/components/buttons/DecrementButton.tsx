import { Button } from "./Button"
import { DecrementLogo } from "../svg"
import { IExtButtonProps } from "../../@types"


export const DecrementButton = (props: IExtButtonProps) => {
  return (
    <Button {...props}>
      <DecrementLogo></DecrementLogo>
    </Button>
  )
}
