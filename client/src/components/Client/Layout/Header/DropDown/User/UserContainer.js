import React from "react";
import ToggleSection from "./ToggleSection";
import { ThunkDisconnectUser } from "../../../../../../store/authentication/actions";
import { SimpleUserLinks } from "./LinksData";
import DropDown from "../DropDown";
import { SIMPLE, ADMIN } from "../../../../../../configs/userRoles";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

const UserContainer = props => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(ThunkDisconnectUser());
  };
  const user = useSelector(state => {
    return state.authentication.user;
  }, _.isEqual);

  const fullName = `${user.firstName} ${user.lastName}`;
  const src = `/images/users/${user.image}`;
  let linksList = [];
  if (user.role == SIMPLE) {
    linksList = SimpleUserLinks(user.id, onLogout);
  } else if (user.role == ADMIN) {
    linksList = SimpleUserLinks(user.id, onLogout);
  }
  // console.log("fullname :", fullName, " src:", src, "list : ", linksList);

  return (
    <DropDown
      title={<ToggleSection fullName={fullName} src={src} />}
      linksList={linksList}
    />
  );
};

export default UserContainer;
