import {
  Dialog,
  Button,
  DialogContent,
  DialogContentText,
  Divider,
} from '@material-ui/core';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useState, VFC } from 'react';

import { QR } from '../QR';

export const ModalQR: VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant='outlined'
        color='secondary'
        endIcon={<QrCode2Icon />}
        style={{ marginBottom: 20 }}
      >
        QRコード
      </Button>
      <Dialog onClose={handleClose} open={isOpen}>
        <DialogContentText
          style={{ textAlign: 'center', padding: 10, margin: 0 }}
        >
          これで布教してくださいm(._.)m
        </DialogContentText>
        <Divider />
        <DialogContent>
          <QR />
        </DialogContent>
      </Dialog>
    </>
  );
};
