
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import SubscribeSection from "~/components/SubscribeSection";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <SubscribeSection />
      <Footer />
    </>
  );
}
