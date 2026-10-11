import { homePageContent } from "../data/home-page.content"
import { AdvertisementSection } from "./advertisement-section"
import { ContactSection } from "./contact-section"
import { DepartmentsSection } from "./departments-section"
import { HomeHero } from "./home-hero"
import { NewsSection } from "./news-section"
import { ServicesSection } from "./services-section"

export function HomePageView() {
  const content = homePageContent

  return (
    <main className="overflow-hidden bg-white">
      <HomeHero content={content.hero} />
      <ServicesSection content={content.services} />
      <AdvertisementSection content={content.advertisement} />
      <DepartmentsSection content={content.departments} />
      <NewsSection content={content.news} />
      <ContactSection content={content.contact} />
    </main>
  )
}
