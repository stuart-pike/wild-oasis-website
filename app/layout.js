// layuout.js is created by NextJS and will recreate it with a default content if deleted.
// It is a convention to call the function RootLayout and this will wrap the entire app thus apply to each route in the app. Beacuase this function wraps the entire app it's mandatory to include the html and body tag.

import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export const metadata = { title: "The Wild Oasis" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
