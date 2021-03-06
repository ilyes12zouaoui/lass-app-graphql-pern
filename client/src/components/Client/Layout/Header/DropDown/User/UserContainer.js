import React from "react";
import ToggleSection from "./ToggleSection";
import { ThunkDisconnectUser } from "../../../../../../store/authentication/actions";
import { SimpleUserLinks, AdminLinks, StaffLinks } from "./LinksData";
import DropDown from "../DropDown";
import { SIMPLE, ADMIN, STAFF } from "../../../../../../configs/userRoles";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { LOGOUT } from "../../../../../../graphql/mutations/authentication/logout";

const UserContainer = props => {
  const dispatch = useDispatch();
  const [logout, { data, loading, error, called }] = useMutation(LOGOUT, {
    ignoreResults: false,
    onCompleted: data => {
      dispatch(ThunkDisconnectUser());
    }
  });
  const onLogout = () => {
    logout();
  };
  const user = useSelector(state => {
    return state.authentication.user;
  }, _.isEqual);

  const fullName = `${user.firstName} ${user.lastName}`;
  const src = `/images/users/${user.image}`;
  let linksList = [];
  if (user.role == SIMPLE) {
    linksList = SimpleUserLinks(user.id, onLogout);
  } else if (user.role == STAFF) {
    linksList = StaffLinks(user.id, onLogout);
  } else if (user.role == ADMIN) {
    linksList = AdminLinks(user.id, onLogout);
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
