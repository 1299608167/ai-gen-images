
// import ClientProvider from "../components/ClientProvider";
import Header from "@/Components/Header";
import PromptInput from "@/Components/PromptInput";
// import "../styles/globals.css";
import "../styles/globals.css"

export const metadata = {
  title: "AI Image Generator",
  description: "Built with Next.js 13.2, DALL·E 2, and Chat GPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ClientProvider> */}
          <Header />

          <PromptInput />

          {children}
        {/* </ClientProvider> */}
      </body>
    </html>
  );
}
