import Link from "./Link/Link";
import DropDown from "./DropDown/DropDown";
import React from "react";
export const turnLinksDataToAnArrayOfComponents = ({
  links = [],
  dropDowns = []
}) => {
  return [
    ...links.map(link => <Link {...link} />),
    ...dropDowns.map(dropDown => <DropDown {...dropDown} />)
  ];
};

export const CommunLinksLeft = {
  links: [{ title: "Home", to: "/" }]
};
export const CommunLinksRight = {
  links: [
    { title: "About", to: "/about" },
    { title: "Contact Us", to: "/contact-us" }
  ]
  // dropDowns: [
  //   {
  //     title: "Test",
  //     linksList: [{ title: "test1", to: "/users/1" }]
  //   }
  // ]
};
export const UnAuthenticatedUserOnly = {
  links: [
    { title: "Login", to: "/login" },
    { title: "Inscription", to: "/inscription" }
  ]
};
// export const AuthenticatedUserOnly = {
//   links: [
//     { title: "profile", to: "/login" },
//     { title: "Inscription", to: "/inscription" }
//   ]
// };
