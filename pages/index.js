import {
  Grid,
  GridItem,
  Text,
  Box,
  Stack,
  Container,
  Center,
} from "@chakra-ui/react";
import axios from "../lib/api";
import Image from "next/image";
import Map from "../components/commun/card/map";
import EventCard from "../components/commun/card/eventCard";
import DegradedHero from "../components/commun/card/degradedHero";
import DiabeteTypeBlock from "../components/func/DiabeteTypeBlock";
import Layout from "../components/layout";
import { DietCard } from "../components/commun/card/dietCard";
import { ActuCard } from "../components/commun/card/actuCard";

export default function Home({ home }) {
  return (
    <Layout>
      <Stack mb={50}>
        <DegradedHero
          coverMob={
            process.env.NEXT_PUBLIC_IMG_SERVER +
            home?.attributes?.cover?.mobile?.data?.attributes?.url
          }
          coverDesc={
            process.env.NEXT_PUBLIC_IMG_SERVER +
            home?.attributes?.cover?.desktop?.data?.attributes?.url
          }
          title={home?.attributes?.title}
          subtitle={home?.attributes?.description}
        />

        <Stack width={"100%"}>
          {" "}
          <Container py={{ base: "3.88rem", lg: "2rem" }} maxW={"container.xl"}>
            <DiabeteTypeBlock payload={home?.attributes?.diabetes?.block} />
            <Stack my={{ base: "3.88rem", lg: "2rem" }}>
              <DietCard />
            </Stack>
            <Stack name="EventCard" my={{ base: "3.88rem", lg: "2rem" }}>
              <Center>
                <Text fontWeight={"bold"} fontSize={31}>
                  {home.attributes.events.title}
                </Text>
              </Center>

              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(3,1fr)",
                }}
                gap={6}
              >
                {home.attributes.events.card.map((item) => (
                  <GridItem key={item.id} w="100%">
                    <EventCard
                      month={item.date}
                      day={item.date}
                      picture={
                        process.env.NEXT_PUBLIC_IMG_SERVER +
                        item.cover.data.attributes.url
                      }
                      title={item.title}
                      description={item.description}
                    />
                  </GridItem>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Stack>
        <Stack>
          <ActuCard />
        </Stack>
        <Stack>
          <Box>
            <Text mt={20} fontWeight={"bold"} fontSize={31}>
              Localisation des centres Diabétiques{" "}
            </Text>
          </Box>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3,1fr)" }}
            gap={6}
          >
            <GridItem>
              <Map
                name={"Centre Marc Sankalé (Abass Ndao)"}
                frame={
                  "https://www.google.com/maps/embed?pb=!4v1681393165579!6m8!1m7!1sSFBRv-yV0sruKzfmoEtyDg!2m2!1d14.68493115529836!2d-17.45389026814711!3f244.65476812426715!4f2.5346620450606565!5f0.7820865974627469"
                }
                link={
                  "https://www.google.com/maps/@14.6849312,-17.4538903,3a,82.2y,244.65h,92.53t/data=!3m6!1e1!3m4!1sSFBRv-yV0sruKzfmoEtyDg!2e0!7i16384!8i8192"
                }
              />
            </GridItem>
            <GridItem>
              <Map
                name={"Centre de santé  Nabil CHOUCAIR"}
                frame={
                  "https://www.google.com/maps/embed?pb=!4v1681419916150!6m8!1m7!1sBEwbLxi-ZugTytA-gyeJKQ!2m2!1d14.74375446383997!2d-17.44413585282039!3f351.4336!4f0!5f0.7820865974627469"
                }
                link={
                  "https://www.google.com/maps/@14.7437545,-17.4441359,3a,82.2y,351.43h,90t/data=!3m6!1e1!3m4!1sBEwbLxi-ZugTytA-gyeJKQ!2e0!7i16384!8i8192"
                }
              />
            </GridItem>
            <GridItem>
              <Map
                name={"Centre Marc Sankalé (Abass Ndao)"}
                frame={
                  "https://www.google.com/maps/embed?pb=!4v1681393165579!6m8!1m7!1sSFBRv-yV0sruKzfmoEtyDg!2m2!1d14.68493115529836!2d-17.45389026814711!3f244.65476812426715!4f2.5346620450606565!5f0.7820865974627469"
                }
                link={
                  "https://www.google.com/maps/@14.6849312,-17.4538903,3a,82.2y,244.65h,92.53t/data=!3m6!1e1!3m4!1sSFBRv-yV0sruKzfmoEtyDg!2e0!7i16384!8i8192"
                }
              />
            </GridItem>
          </Grid>
        </Stack>
        <Stack w={"100%"}>
          <Container maxW={"container.xl"}>
            <Box>
              <Text mt={20} fontWeight={"bold"} fontSize={31}>
                Nos Partenaires
              </Text>
            </Box>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(4,1fr)",
              }}
              gap={6}
            >
              {home.attributes.partenaires.map((item) => (
                <GridItem key={item.id}>
                  <Box h={"80px"} w={"100%"} position={"relative"}>
                    <Image
                      alt="partenaire"
                      fill
                      src={
                        process.env.NEXT_PUBLIC_IMG_SERVER +
                        item.image.data.attributes.url
                      }
                      style={{ borderRadius: "8px" }}
                    />
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Container>
        </Stack>
      </Stack>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/home?populate=cover.desktop,cover.mobile,diabetes.block,events.card.cover,partenaires.image`
  );
  return {
    props: {
      home: res.data.data,
    },
  };
}
