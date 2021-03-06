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
  PageNotFound,
  AccountActivationPage,
  ResetPassword,
  ResendResetPasswordEmail,
  ContactUs,
  About,
  AdminContactUsMessages,
  AdminUser
} from "../pages";
export const CommunRoutes = [
  <Route
    path="/reset-password/:token"
    exact
    render={() => (
      <ClientLayout>
        <ResetPassword />
      </ClientLayout>
    )}
  />,
  <Route
    path="/resend-reset-password-email"
    exact
    render={() => (
      <ClientLayout>
        <ResendResetPasswordEmail />
      </ClientLayout>
    )}
  />,
  <Route
    path="/contact-us"
    exact
    render={() => (
      <ClientLayout>
        <ContactUs />
      </ClientLayout>
    )}
  />,

  <Route
    path="/about"
    exact
    render={() => (
      <ClientLayout>
        <About />
      </ClientLayout>
    )}
  />,
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
    path="/account-activation/:token"
    exact
    render={() => (
      <ClientLayout>
        <AccountActivationPage />
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
    path="/admin/users/:id"
    exact
    render={props => (
      <AdminLayout>
        <AdminUser {...props} />
      </AdminLayout>
    )}
  />,
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
  />,
  <Route
    path="/admin/contact-us-messages"
    exact
    render={() => (
      <AdminLayout>
        <AdminContactUsMessages />
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
