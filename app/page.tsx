import Footer from "@/shared/components/citrica-ui/organism/footer";
import SectionTypography from "./home/components/section-typography";

export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <>
      <section>
        <SectionTypography />
      </section>
    </>
  );
}