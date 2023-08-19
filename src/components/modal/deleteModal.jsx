import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React from "react";

function DeleteModal(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: props.onlySmallScreen ? 300 : 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Stack
          style={{ direction: "ltr" }}
          direction="row"
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Button
            data-isclose="true"
            onClick={props.handleCancel}
            variant="outlined"
            color="success"
          >
            Cancel
          </Button>
          {/* <Button
            data-isclose="false"
            onClick={props.handleConfirm}
            variant="outlined"
            data-isdelete="true"
          >
            Confirm
          </Button> */}
        </Stack>
      </Box>
    </Modal>
  );
}

export default DeleteModal;
