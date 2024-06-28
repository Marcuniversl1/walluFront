import { Stack, Text } from "@chakra-ui/react";
import { getSession, signIn, signOut } from "next-auth/react";

export default function Blog({ session }) {
  console.log(session);
  return (
    <>
      <Stack>
        <Text>Blog</Text>
      </Stack>
    </>
  );
}
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/user/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
