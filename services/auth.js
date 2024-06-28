import axios from "axios";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function signIn({ identifier, password }) {
  const res = await axios.post(`${strapiUrl}/auth/local`, {
    identifier: identifier,
    password,
  });
  return res.data;
}
