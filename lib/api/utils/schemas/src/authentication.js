/* eslint-disable no-useless-escape */
import { number, object, ref, string } from 'yup';

export const authenticationInput = object({
  identifier: string().trim().required(),
  password: string().trim().required(),
  authentication: string().trim(),
});

export const forgotPasswordInput = object({
  identifier: string().email().trim().required(),
  resetRequest: string().trim(),
});
export const resetPasswordInput = object({
  email: string().email().trim().required(),
  otp: number().required(),
  password: string()
    .trim()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[!@#$%^&*()\-_=+\\\|\[\]{};:\'",.<>/?]).{8,}$/,
      'Le mot de passe doit contenir au moins une lettre en majuscule et un caractère spécial.'
    )
    .required(),
  confirmPassword: string()
    .trim()
    .oneOf([ref('password'), null], 'Les Mots de passe ne corespondent pas')
    .required('Veuillez confirmez Votre Mot de passe'),
  resetPassword: string().trim(),
});

export const registrationInput = object({
  entreprise: string().trim(), //.required("Nom d'entreprise requise"),
  email: string().email().trim().required('Adresse mail requise'),

  password: string()
    .trim()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[!@#$%^&*()\-_=+\\\|\[\]{};:\'",.<>/?]).{8,}$/,
      'Le mot de passe doit contenir au moins une lettre en majuscule et un caractère spécial.'
    )
    .required(),
  registration: string().trim(),
});
