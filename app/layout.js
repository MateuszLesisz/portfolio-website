
import "./globals.css";
import Theme from "@/components/Theme";
import DarkLight from "@/components/DarkLight";

export const metadata = {
  title: "Mateusz Lesisz ",
  description: "my name is Mateusz Lesisz I am java developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <DarkLight />
          {children}
        </Theme>
      </body>
    </html>
  );
}
