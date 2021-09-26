import { Dialog, Button, DialogContent, DialogContentText, Divider } from "@material-ui/core";
import CropFreeIcon from '@material-ui/icons/CropFree';
import { useState } from "react";

import { QR } from "../QR";

export const ModalQR = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return(
    <>
      <Button onClick={handleOpen} variant="outlined" color="secondary" endIcon={<CropFreeIcon />} style={{ marginBottom: 20}}>
        このページのQRコードを表示
      </Button>
      <Dialog onClose={handleClose} open={isOpen}>
        <DialogContentText style={{ textAlign: "center", padding: 10, margin: 0 }}>これで布教してくださいm(._.)m</DialogContentText>
        <Divider />
        <DialogContent>
          <QR />
        </DialogContent>
      </Dialog>
    </>
  )
}