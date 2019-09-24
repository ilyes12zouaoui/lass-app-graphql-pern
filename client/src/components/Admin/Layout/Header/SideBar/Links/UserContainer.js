import React from "react";
import { ThunkDisconnectUser } from "../../../../../../store/authentication/actions";
import { ProfileLinks } from "./LinksData";
import User from "./User";
import { SIMPLE, ADMIN } from "../../../../../../configs/userRoles";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./Links.module.css";
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
  let linksList = ProfileLinks(user.id, onLogout);

  // console.log("fullname :", fullName, " src:", src, "list : ", linksList);
  let showLinksList = linksList.map(link => (
    <div>
      <NavLink
        {...link}
        className={style.link}
        activeClassName="admin-link-active"
        exact
      >
        {link.title}
      </NavLink>
    </div>
  ));
  return (
    <>
      <User
        src={src}
        fullName={fullName}
        // title={<ToggleSection fullName={fullName} src={src} />}
        // linksList={linksList}
      />
      <nav>{showLinksList}</nav>
    </>
  );
};

export default UserContainer;
