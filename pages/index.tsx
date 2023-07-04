import Image from "next/image";
import { Inter } from "next/font/google";
import { HeaderMenuColored } from "@/components/Header";
import { FooterSocial } from "@/components/Footer";
import { Homeprofile } from "@/components/Homeprofile";
import { Stats } from "@/components/Stats";
import Chart from "@/components/Chart";
import { Container, Flex, Table } from "@mantine/core";
import { Demo } from "@/components/Table";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeaderMenuColored
        links={[
          {
            link: "http://example.com",
            label: "履歴",
          },
          {
            link: "http://example.com",
            label: "記録",
          },
          {
            link: "http://example.com",
            label: "プロフィール",
          },
          { link: "http://example.com", label: "ログアウト" },
        ]}
      />
      <Homeprofile />
      <Flex justify="flex-start" align="center" direction="row" gap={50}>
        <Container
          fluid={true}
          style={{ width: "60%", marginLeft: 0, marginRight: 0 }}
        >
          <Chart />
        </Container>
        <Container fluid={true} style={{ marginLeft: 0, marginRight: 0 }}>
          <Stats />
        </Container>
      </Flex>
      <Demo />
      <FooterSocial />
    </>
  );
}
