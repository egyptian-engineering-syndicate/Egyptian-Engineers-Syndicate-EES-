import type { Metadata } from "next";
import { getAboutData } from "@/lib/directus/about";
import { getContactInfo } from "@/lib/directus/contact";
import { getMembersData } from "@/lib/directus/members";
import AboutPageContent from "@/components/About/AboutPageContent";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "من نحن | نقابة المهندسين بالقاهرة",
  description: "تعرّف على نقابة المهندسين الفرعية بالقاهرة، رؤيتها، وأهدافها.",
};

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const [aboutResult, membersResult, contactResult] = await Promise.all([
    getAboutData(),
    getMembersData(),
    getContactInfo(),
  ]);

  const initialMembers = membersResult.ok ? membersResult.data : [];
  const initialContact = contactResult.ok ? contactResult.data : undefined;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full">
        <AboutPageContent
          aboutResult={aboutResult}
          initialMembers={initialMembers}
          initialContact={initialContact}
        />
      </main>

      <Footer />
    </div>
  );
}

