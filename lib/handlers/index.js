import { signIn } from "next-auth/react";
import { forms, routes } from "../../theme";

const {
  errors: {
    auth: {
      login: { not_authorized },
    },
  },
} = forms.messages;

const {
  page_route: { dashboard },
} = routes;

export const loginFormHandler = async (
  values,
  { setSubmitting, setFieldError },
  redirectOnSuccess = dashboard.initial
) => {
  const { identifier, password } = values;
  try {
    const res = await signIn("credentials", {
      identifier: identifier,
      password: password,
    });

    if (res.status && res.status == 200) {
      window.location.assign(redirectOnSuccess);
    }

    if (!res || res.error) {
      setSubmitting(false);
      setFieldError("authentication", not_authorized);
      return;
    }
  } catch (error) {
    setSubmitting(false);
  }
};
