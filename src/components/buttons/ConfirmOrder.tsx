import { useState } from "react"
import { createPortal } from "react-dom"
import { Button } from "./Button"
import styles from "./ConfirmOrder.module.scss"
import OrderModal from "../modal/OrderModal"

const ConfirmOrder = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Button className={styles.confirmOrder} onClick={() => setShowModal(true)}>
        Confirm Order
      </Button>
      {showModal && createPortal(<OrderModal />, document.body)}
    </>
  )
}

export default ConfirmOrder
