import type { Metadata } from "next";
import { Content, Inter } from "next/font/google";
import "./globals.css";
import { Menu } from "antd";
import Layout, { Footer, Header } from "antd/es/layout/layout";

const inter = Inter({ subsets: ["latin"] });

const items = [
  {key: "home", label: <link href={"/"}>Home</link>},
  {key: "books", label: <link href={"/books"}>Books</link>}
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{minHeight: "100vh"}}>
          <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                items={items}
                style={{flex: 1, minWidth: 0}}
            />
          </Header>{" "}
          <Content style={{ padding: "0 48px" }}>{children}</Content>
          <Footer style={{ textAlign: "center"}}>
            Created by ReadGee
          </Footer>
        </Layout>
        </body>
    </html>
  );
}

