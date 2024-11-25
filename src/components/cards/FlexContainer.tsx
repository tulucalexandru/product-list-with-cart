interface IFlexContainer extends React.ComponentPropsWithoutRef<"div"> {
  direction: "row" | "column"
  gap?: string,
}

const FlexContainer = ({ direction, gap, ...props }: IFlexContainer) => {

  return (
    <div style={{ display: "flex", flexDirection: direction, gap: gap }} {...props}></div>
  )
}

export default FlexContainer
