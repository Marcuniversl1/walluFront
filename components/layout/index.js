import { Fragment, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Container, Stack } from "@chakra-ui/react";
import Header from "../header";
import fetchHeader from "../../lib/api/utils/fetchData";

export default function Layout({ children }) {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const fetchHeaderData = async () => {
      const data = await fetchHeader();
      setHeaderData(data);
    };

    fetchHeaderData();
  }, []);
  const { data: session } = useSession();

  useEffect(() => {
    if (session == null) return;
  }, [session]);
  return (
    <Stack bg={"#fbf9f9"} width={"100%"}>
      <Header {...{ session }} menus={headerData} />
      <Stack w={"100%"}>{children}</Stack>
    </Stack>
  );
}
