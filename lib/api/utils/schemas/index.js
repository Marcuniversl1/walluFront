import {
  authenticationInput,
  forgotPasswordInput,
  registrationInput,
  resetPasswordInput,
} from "./src/authentication";
import { newsletterInput } from "./src/newsletter";
import { searchInput } from "./src/search";

export const authenticationSchema = authenticationInput;
export const forgotPasswordSchema = forgotPasswordInput;
export const resetPasswordSchema = resetPasswordInput;
export const registrationSchema = registrationInput;

export const newsletterSchema = newsletterInput;
export const searchShemas = searchInput;
