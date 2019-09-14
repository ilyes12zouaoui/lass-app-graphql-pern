import React from "react";

import { Route } from "react-router-dom";

import ClientLayout from "../components/Client/Layout/Layout";
import AdminLayout from "../components/Admin/Layout/Layout";
import {
  HomePage,
  InscriptionPage,
  LoginPage,
  UserPage,
  AdminHome,
  AdminUsers,
  PageNotFound
} from "../pages";
export const CommunRoutes = [
  <Route
    path="/"
    exact
    render={() => (
      <ClientLayout>
        <HomePage />
      </ClientLayout>
    )}
  />,
  <Route
    path="/users/:id"
    exact
    render={props => (
      <ClientLayout>
        <UserPage {...props} />
      </ClientLayout>
    )}
  />
];

export const UnAuthenticatedUserOnly = [
  <Route
    path="/inscription"
    exact
    render={() => (
      <ClientLayout>
        <InscriptionPage />
      </ClientLayout>
    )}
  />,
  <Route
    path="/login"
    exact
    render={() => (
      <ClientLayout>
        <LoginPage />
      </ClientLayout>
    )}
  />
];
export const AuthenticatedAdminOnly = [
  <Route
    path="/admin"
    exact
    render={() => (
      <AdminLayout>
        <AdminHome />
      </AdminLayout>
    )}
  />,
  <Route
    path="/admin/users"
    exact
    render={() => (
      <AdminLayout>
        <AdminUsers />
      </AdminLayout>
    )}
  />
];

export const PageNotFoundRoute = [
  <Route
    render={() => (
      <ClientLayout>
        <PageNotFound />
      </ClientLayout>
    )}
  />
];
