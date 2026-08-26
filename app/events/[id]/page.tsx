import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import EventDetails from "@/components/Events/EventDetails";
import { getEventById } from "@/lib/directus/events";

interface EventDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    return {
      title: "الفعالية غير موجودة | نقابة المهندسين بالقاهرة",
    };
  }

  return {
    title: `${event.title} | نقابة المهندسين بالقاهرة`,
    description: event.description.slice(0, 160),
  };
}

export const dynamic = "force-dynamic";

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f8f8f8" }}>
      <main style={{ flexGrow: 1 }}>
        <EventDetails event={event} />
      </main>
      <Footer />
    </div>
  );
}
