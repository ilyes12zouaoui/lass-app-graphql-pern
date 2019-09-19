export const SimpleUserLinks = (id, onLogout = () => {}) => [
  { title: "Profile", to: `/users/${id}` },
  { title: "Logout", to: "/", onClick: onLogout }
];

export const AdminLinks = (id, onLogout = () => {}) => [
  { title: "Profile", to: `/users/${id}` },
  { title: "Logout", to: "/", onClick: onLogout }
];
