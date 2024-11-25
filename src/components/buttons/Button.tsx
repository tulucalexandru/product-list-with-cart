import { IExtButtonProps, IButtonProps } from "../../@types"

export const Button = (props: IButtonProps | IExtButtonProps) => {
  return (
    <button {...props}>{props.children}</button>
  )
}
