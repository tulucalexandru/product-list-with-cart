

const Button = (props: IButtonProps) => {
  return (
    <button {...props}>{props.children}</button>
  )
}

export default Button
