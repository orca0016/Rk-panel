import * as React from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/system";
import Modal from "@mui/base/Modal";
import Button from "@mui/base/Button";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../../context/dataContext";
export default function AsideBtn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { dark } = useContext(ApiContext);

  return (
    <div className={`aside-btn ${dark ? "light2" : null}`}>
      <TriggerButton onClick={handleOpen}>
        <img
          className="list-responsive"
          src="../../img/list-nav.svg"
          alt="user"
        />
      </TriggerButton>
      <StyledModal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: StyledBackdrop }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <aside
              style={{
                position: "fixed",
                top: 0,
                height: "100%",
                display: "flex",
              }}
              className={`aside ${dark ? "light3" : null}`}
            >
              <img src="../../img/photo.png" alt="user" />
              <button>
                <Link to={"/app/dashboard"}>
                  <img src="../../img/user.png" alt="user" />
                </Link>
              </button>
              <button>
                <Link to={"/"}>
                  <img src="../../img/list.png" alt="user" />
                </Link>
              </button>
              <button>
                <Link to={"/"}>
                  <img src="../../img/chart.png" alt="user" />
                </Link>
              </button>
              <button>
                <Link to={"/"}>
                  <img src="../../img/som.png" alt="user" />
                </Link>
              </button>
              <button>
                <Link to={"/"}>
                  <img src="../../img/paper.png" alt="user" />
                </Link>
              </button>
              <button>
                <Link to={"/"}>
                  <img src="../../img/headphone.png" alt="user" />
                </Link>
              </button>
              <button>
                <Link to={"/"}>
                  <img src="../../img/shop.png" alt="user" />
                </Link>
              </button>
              <button>
                <Link to={"/"}>
                  <img src="../../img/pen (1).png" alt="user" />
                </Link>
              </button>
            </aside>
          </Box>
        </Fade>
      </StyledModal>
    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return <Fade ref={ref} in={open} {...other} />;
});

Backdrop.propTypes = {
  open: PropTypes.bool.isRequired,
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = (theme) => ({
  position: "absolute",
  top: "0%",
  right: "0%",
  transform: "translate(-0%, -0%)",
  width: "90px",
  height: "100%",
  boxShadow: 16,
});

//   min-height: calc(1.5em + 22px);
const TriggerButton = styled(Button)(
  ({ theme }) => `

  background: transparent;
border:none ; 

  &:hover {

  }
  `
);
