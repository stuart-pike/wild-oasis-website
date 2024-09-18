// layuout.js is created by NextJS and will recreate it with a default content if deleted.
// It is a convention to call the function RootLayout and this will wrap the entire app thus apply to each route in the app. Beacuase this function wraps the entire app it's mandatory to include the html and body tag.

import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heard of the Italian Dolomites, surrounded by beautiful mountains and forest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative flex flex-col ${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
