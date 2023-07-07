import "./globals.css";
import { Figtree } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "@/components/NavBar";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Mason Williams",
  description: "Mason Williams' personal website.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body className={figtree.className}>
        <NavBar />

        <div className={"mt-14 sm:mt-32 mx-10 sm:mx-20 md:mx-32"}>
          {children}
        </div>

        <Analytics />

        <div className={"flex justify-center mt-14 text-gray-300"}>
          As you can probably tell, the website is a work in progress 🥲
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
