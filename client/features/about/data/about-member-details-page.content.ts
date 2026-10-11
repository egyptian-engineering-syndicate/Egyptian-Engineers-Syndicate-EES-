import { notFound } from "next/navigation"

import type { AboutMemberDetailsPageContent } from "../types/about-content.types"
import { aboutPageContent } from "./about-page.content"

const pageTitle = "تفاصيل السيد العضو"

const defaultBio = [
  "عضو بمجلس نقابة المهندسين بالقاهرة، يشارك في أعمال المجلس ولجانه بما يدعم المهنة ويخدم الأعضاء، ويعمل على الارتقاء بمستوى الخدمات النقابية.",
]

const memberBios: Record<string, string[]> = {
  "abdelaziz-kafrawy": [aboutPageContent.chairman.bio],
  "ahmed-mahran": [
    "الأربعاء، 10 يوليو 2024م: أعلنت شركة الدرعية اليوم، عن توقيع عقد ضخم مع شركة السيف مهندسون مقاولون (FSECC) إحدى الشركات الكبرى في مجال الهندسة والبناء في الشرق الأوسط وبالشراكة مع الشركة الصينية العامة للهندسة المعمارية (CSCEC) والتي تُعد أكبر شركة إنشاءات في العالم، لتنفيذ مشروع أعمال بناء وتشييد واسعة النطاق في المنطقة الشمالية من الدرعية.",
    "وتتضمن تفاصيل المشروع، الذي يعد أحد أضخم العقود الإنشائية الممنوحة من هيئة تطوير الدرعية حتى الآن بقيمة تتجاوز 7.8 مليار ريال (2 مليار دولار)، بناء منطقة متعددة الاستخدامات، تضم مؤسسات تعليمية متقدمة ومواقع ثقافية ومكاتب حديثة وفندقاً فاخراً.",
    "على يد أمهر وأهم المطورين العقاريين في المملكة العربية السعودية والعالم. وذلك للمساهمة في إنجاز مشروع تطوير الدرعية الذي يمثل أهم وجهة تاريخية وثقافية في المملكة، وأحد أبرز مشاريع رؤية السعودية 2030.",
  ],
}

function splitRoleTitles(role: string) {
  const parts = role
    .split("—")
    .map((part) => part.trim())
    .filter(Boolean)

  const membershipTitles = parts.filter((part) => part.includes("عضو مجلس"))
  const accentTitles = parts
    .filter((part) => !part.includes("عضو مجلس"))
    .reverse()

  return { accentTitles, membershipTitles }
}

export function getAboutMemberDetailsPageContent(
  memberId: string
): AboutMemberDetailsPageContent {
  const chairman = aboutPageContent.chairman
  const member =
    memberId === chairman.id
      ? {
          id: chairman.id,
          name: chairman.name,
          role: chairman.role,
          image: chairman.image,
        }
      : aboutPageContent.members.find((item) => item.id === memberId)

  if (!member) {
    notFound()
  }

  const { accentTitles, membershipTitles } = splitRoleTitles(member.role)

  return {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "من نحن", href: "/about" },
      { label: member.name },
    ],
    pageTitle,
    name: member.name,
    accentTitles,
    membershipTitles,
    bio: memberBios[member.id] ?? defaultBio,
    image: member.image,
  }
}
