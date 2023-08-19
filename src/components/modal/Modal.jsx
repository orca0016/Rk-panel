import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

// import { spacing } from "@mui/system";

export default function BasicModal(props) {
  console.log(props.obj);
  return (
    <div>
      {/* <Button onClick={props.handleOpen}>Open modal</Button> */}
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
            ایجاد رویداد
          </Typography>
          <form action="">
            <TextField
              required={true}
              onChange={(e) =>
                props.setEvent((current) => {
                  return {
                    ...current,
                    title: e.target.value,
                    id: e.target.value,
                  };
                })
              }
              sx={{ width: "100%" }}
              id="standard-basic"
              label="عنوان رویداد"
              variant="standard"
            />
            <TextField
              required={true}
              sx={{ width: "100%" }}
              id="standard-basic"
              label="توضیحات"
              variant="standard"
              onChange={(e) => {
                props.setEvent((current) => {
                  return {
                    ...current,
                    info: e.target.value,
                  };
                });
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileTimePicker
                defaultValue={dayjs("2022-04-17T00:00")}
                timezone="system"
                onChange={(e) => {
                  props.setEvent((current) => {
                    return {
                      ...current,
                      date: `${e.hour().toString().padStart(2, 0)}:${e
                        .minute()
                        .toString()
                        .padStart(2, 0)}`,
                    };
                  });
                }}
              />
            </LocalizationProvider>
            {props.obj
              ?.filter((e) => {
                console.log(
                  dayjs(props.dateJ.current).isSame(toString(e.day), "day")
                );
                return dayjs(props.dateJ.current).isSame(
                  toString(e.day),
                  "day"
                );
              })
              .map((x) => {
                return <div key={x.id}>{x.title}</div>;
              })}

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
                color="error"
              >
                لغو
              </Button>
              <Button
                type="submit"
                data-isclose="false"
                onClick={props.handleConfirm}
                variant="outlined"
                data-isdelete="false"
              >
                تایید
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
