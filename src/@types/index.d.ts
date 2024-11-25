export interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
}

export interface IExtButtonProps extends IButtonProps {
  name: string,
  quantity: string
}
