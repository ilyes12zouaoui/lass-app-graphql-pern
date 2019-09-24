export const SimpleUserLinks = (id, onLogout = () => {}) => [
  { title: "Profile", to: `/users/${id}` },
  { title: "Logout", to: "", onClick: onLogout }
];
export const StaffLinks = (id, onLogout = () => {}) => [
  { title: "Profile", to: `/users/${id}` },
  { title: "Logout", to: "", onClick: onLogout }
];

export const AdminLinks = (id, onLogout = () => {}) => [
  { title: "Profile", to: `/users/${id}` },
  { title: "admin space", to: `/admin` },
  { title: "manage users", to: `/admin/users` },
  { title: "manage contact us messages", to: `/admin/contact-us-messages` },
  { title: "Logout", to: "", onClick: onLogout }
];
