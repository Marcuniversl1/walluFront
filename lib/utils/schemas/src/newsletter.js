import { object, string } from 'yup';

export const newsletterInput = object({
  mail: string().email().trim().required(),
  newsSubmition: string(),
});
