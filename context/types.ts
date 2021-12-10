export interface ModalsContextType {
  initialDisclaimer: {
    open?: boolean,
    handleOpen?: () => void,
    handleClose?: () => void
  }
}