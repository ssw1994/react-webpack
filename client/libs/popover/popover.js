import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import { Link } from "react-router-dom";

import "./popover.scss";
import { setActiveMenu } from "../../store/actions/menu.action";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function POP(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleMenuClick = (event, menu) => {
    alert("dispatched");
  };

  const menus = props.menus;

  return (
    <>
      <span
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {props.children}
      </span>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <ul className="pop-menu">
          {menus.map((menu, index) => {
            return (
              <li key={index} onClick={(e) => dispatch(setActiveMenu(menu))}>
                <Link to={menu.link}>{menu.name}</Link>
              </li>
            );
          })}
        </ul>
      </Popover>
    </>
  );
}
