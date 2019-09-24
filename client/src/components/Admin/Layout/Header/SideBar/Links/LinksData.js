export const ProfileLinks = (id, onLogout = () => {}) => [
  { title: "Home", to: "/admin" },
  { title: "Admin profile", to: `/admin/users/${id}` },
  { title: "Client profile", to: `/users/${id}` },
  { title: "Manage users", to: "/admin/users" },
  { title: "Manage contact us messages", to: "/admin/contact-us-messages" },

  { title: "Logout", to: "", onClick: onLogout }
];
