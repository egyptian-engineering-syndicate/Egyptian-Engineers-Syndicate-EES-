import type { Metadata } from "next";
import { getContactInfo, getContactAddresses } from "@/lib/directus/contact";
import ContactAddressesSection from "@/components/Contact/ContactAddressesSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "تواصل معنا | نقابة المهندسين بالقاهرة",
  description: "تواصل مع نقابة المهندسين الفرعية بالقاهرة، عناوين وتليفونات الفروع، والنقابة العامة.",
};

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const [addressesResult, contactResult] = await Promise.all([
    getContactAddresses(),
    getContactInfo(),
  ]);

  const addresses = addressesResult.ok ? addressesResult.data : [];
  const initialContact = contactResult.ok ? contactResult.data : undefined;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full">
        {/* Section 1: عناوين التواصل */}
        <ContactAddressesSection addresses={addresses} />

        {/* Section 2: Existing Contact Component */}
        <ContactSection initialContact={initialContact} />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
