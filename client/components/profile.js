import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSideBarType } from "../store/actions/util.action";
import { sidebarTypes } from "../libs/js/model";
export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSideBarType({ sidebarType: sidebarTypes.usersettings }));
  }, []);
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
