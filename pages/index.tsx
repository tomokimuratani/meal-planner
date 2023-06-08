import Image from "next/image";
import { Inter } from "next/font/google";
import { HeaderMenuColored } from "@/components/Header";
import { FooterSocial } from "@/components/Footer";
import { Homeprofile } from "@/components/Homeprofile";
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
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Homeprofile />
      </main>
      <FooterSocial />
    </>
  );
}
