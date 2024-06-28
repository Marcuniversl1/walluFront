import { object, string } from 'yup';

export const searchInput = object({
  keyword: string().trim().required(),
  searchSubmition: string(),
});
