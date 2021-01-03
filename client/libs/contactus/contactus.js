import React from "react";
import { InputProps } from "../js/form";
import { Input } from "../../libs/formcontrols/formcontrol";
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useFormGroup } from "../js/hooks";
import "./contactus.scss";
import { useDispatch, useSelector } from "react-redux";
import { mailStatus } from "../../store/selectors/util.selector";
import { sendMail } from "../../store/actions/util.action";
import FreeMap from "../map/FreeMap";
export default function ContactUs({ showMap }) {
  const dispatch = useDispatch();
  const emailStatus = useSelector(mailStatus);
  const [contact, updateContactForm] = useFormGroup({
    fullname: InputProps(
      "",
      "fullname",
      "Full Name",
      (e) => updateContactForm(e),
      {
        required: true,
      },
      false,
      { variant: "outlined" }
    ),
    email: InputProps(
      "",
      "email",
      "Email",
      (e) => updateContactForm(e),
      {
        required: true,
      },
      false,
      { variant: "outlined" }
    ),
    message: InputProps(
      "",
      "message",
      "Message",
      (e) => updateContactForm(e),
      {
        required: true,
      },
      false,
      { multiline: true, rows: 4, variant: "outlined" }
    ),
  });

  const sendMessage = (event) => {
    let param = {
      fullname: contact.fullname.value,
      email: contact.email.value,
      message: contact.message.value,
    };
    dispatch(sendMail(param));
  };

  return (
    <Card className="contact-card b-shadow">
      <CardHeader title="Contact Us"></CardHeader>
      <CardContent>
        <div className="row">
          {showMap ? (
            <div className="col-6 padding0">
              <FreeMap />
            </div>
          ) : null}
          <div className={showMap ? "col-6 padding0" : "col-12 padding0"}>
            <div className="row">
              <div className="col-12">
                <Input {...contact.fullname} />
              </div>
              <div className="col-12">
                <Input {...contact.email} />
              </div>
              <div className="col-12">
                <Input {...contact.message} />
              </div>
              <div className="col-12 center-items h-150">
                <Button variant="contained" onClick={(e) => sendMessage(e)}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
