import type { Metadata } from "next";
import { getContactInfo } from "@/lib/directus/contact";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "تواصل معنا | نقابة المهندسين بالقاهرة",
  description: "تواصل مع نقابة المهندسين الفرعية بالقاهرة عبر الهاتف، البريد الإلكتروني، أو من خلال النموذج الإلكتروني.",
};

export default async function ContactPage() {
  const contactResult = await getContactInfo();
  const initialContact = contactResult.ok ? contactResult.data : undefined;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full">
        <ContactSection initialContact={initialContact} />
      </main>
      <Footer />
    </div>
  );
}
