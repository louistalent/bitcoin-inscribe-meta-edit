import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from 'next/link';
import Ui from '../../components/ui'
import Head from 'next/head';
import ContextProvider from '../../context'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "META",
  description: "Non-custodial Runes Launchpad & Inscribing service"
};

export default function RootLayout({ children }) {
  return (
<html lang="en">
      <Head>
         <meta property="og:image" content="/assets/metaimage-main.png" />
         <meta name="twitter:image" content="/assets/metaimage-main.png" />
      </Head>
      <ContextProvider>
        <body className={inter.className}>
          <div>
            <Ui className="ui"/>
          <div className="content">{children}</div>
          </div>
        </body>
      </ContextProvider>

    </html>
  );
}