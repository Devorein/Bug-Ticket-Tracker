import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function ConfirmDeleteDialog({
  dialogOpen,
  dialogClose,
  entity,
  handleDeleteUser,
  ...props
}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const router = useRouter();
  const { projectId } = router.query;

  const handleClose = (event, reason) => {
    setOpen(false);
    console.log(personName);
  };

  const handleOk = (event, reason) => {
    handleDeleteUser();
    dialogClose();
  };

  return (
    <Box>
      <Dialog disableEscapeKeyDown open={dialogOpen} onClose={dialogClose}>
        <DialogTitle>
          Are you sure you want to delete all instances of this {entity} ?
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleOk}>Delete</Button>
          <Button onClick={dialogClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}