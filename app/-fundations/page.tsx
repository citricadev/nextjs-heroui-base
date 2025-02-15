import Footer from "@/shared/components/citrica-ui/organism/footer";
import SectionTypography from "./components/section-typography";
import Navbar from "@/shared/components/citrica-ui/organism/navbar";

export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <>
      <Navbar />
      <section>
        <SectionTypography />
      </section>
    </>
  );
}