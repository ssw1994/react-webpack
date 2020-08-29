import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import "./modalbox.scss";
const ModelBox = (WrappedComponent) => {
  return class Model extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: true,
      };
      this.handleClose = this.handleClose.bind(this);
    }

    handleClose = () => {
      this.setState({ open: false });
    };

    render() {
      return (
        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            transition={null}
          >
            <DialogTitle
              id="alert-dialog-title"
              style={{ justifyContent: "right", textAlign: "right" }}
            >
              <CloseIcon onClick={(e) => this.handleClose(e)} />
            </DialogTitle>
            <DialogContent>
              <WrappedComponent close={this.handleClose} />
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  };
};

export default ModelBox;
