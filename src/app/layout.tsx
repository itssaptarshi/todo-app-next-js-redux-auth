import Particles from './particle';
import "./globals.css";
import NavBar from './navbar/page'

import { Providers } from "./redux/provider";

export const metadata = {
  title: "Todo App",
  description: "Todo App with Next Js and Redux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
      <body className="bg-slate-800 text-white">
        <NavBar/>
       
        <main>
          <Providers>{children}</Providers>
        </main>
        <Particles/>
      </body>
  );
}
