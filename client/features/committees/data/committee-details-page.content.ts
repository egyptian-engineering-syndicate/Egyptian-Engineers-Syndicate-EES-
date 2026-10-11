import { notFound } from "next/navigation"

import type { CommitteeDetailsPageContent } from "../types/committees-content.types"
import { committeesPageContent } from "./committees-page.content"

const brief =
  "الدرعية، 10 يوليو 2024م: أعلنت شركة الدرعية اليوم، عن توقيع عقد ضخم مع شركة السيف مهندسون مقاولون (ESEC) إحدى الشركات الكبرى في مجال الهندسة والبناء في الشرق الأوسط وبالشراكة مع الشركة الصينية العامة للهندسة المعمارية (CSCEC) والتي تُعد أكبر شركة إنشاءات في العالم، لتنفيذ مشروع أعمال بناء وتشييد واسعة النطاق في المنطقة الشمالية من الدرعية."

function boardPhoto(file: string, alt: string) {
  return { src: `/images/about/board/${file}`, alt }
}

export function getCommitteeDetailsPageContent(
  committeeId: string
): CommitteeDetailsPageContent {
  const committee = committeesPageContent.committees.find(
    (item) => item.id === committeeId
  )

  if (!committee) {
    notFound()
  }

  return {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "اللجان", href: "/committees" },
      { label: "تفاصيل اللجان" },
    ],
    title: committee.title,
    paragraphs: [
      `${brief} وتتضمن تفاصيل المشروع، الذي يعد أضخم العقود الإنشائية الممنوحة حتى الآن في تاريخ تطوير الدرعية بقيمة تتجاوز 7.8 مليار ريال (2 مليار دولار)؛ بناء منطقة متعددة الاستخدامات، تضم مؤسسات تعليمية متقدمة ومواقع ثقافية ومكاتب حديثة وفندقاً فاخراً، على يد أمهر وأهم المطورين العقاريين من المملكة العربية السعودية والعالم، وذلك للمساهمة في إنجاز مشروع تطوير الدرعية الذي يمثل أهم وجهة تاريخية وثقافية في المملكة، وأحد أبرز مشاريع رؤية السعودية 2030.`,
      `${brief} وتتضمن تفاصيل المشروع.`,
    ],
    image: {
      src: "/images/clubs/cultural.jpg",
      alt: "اجتماع لجنة داخل النقابة",
    },
    chairTitle: "رئيس اللجنة",
    chair: {
      orgTitle: "رئيس نقابة مهندسين القاهرة",
      name: "دكتور المهندس / عبد العزيز حسب الله الكفراوي",
      bio: "أسست نقابة المهندسين بناءً على مبادئ الحقوق الهندسية، والتي كانت قد أعطت بالقانون رقم 89 لسنة 1946، وقد تطورت النقابة بعد ذلك بفضل الحضور السياسي والاجتماعي الذي شهده الشعب المصري وبعده شهد بعد سنة 2010م.",
      image: boardPhoto(
        "chairman-kafrawy.jpg",
        "دكتور المهندس عبد العزيز حسب الله الكفراوي"
      ),
    },
    membersTitle: "السادة أعضاء اللجنة",
    members: [
      {
        id: "mina-azmy",
        name: "دكتور المهندس / مينا عزمي",
        role: "أمين عام نقابة مهندسين القاهرة",
        image: boardPhoto("john-adel-hanna.jpg", "دكتور المهندس مينا عزمي"),
      },
      {
        id: "yehya-elziny",
        name: "المهندس / يحيى الزيني",
        role: "أمين صندوق نقابة المهندسين",
        image: boardPhoto("mina-azmy.jpg", "المهندس يحيى الزيني"),
      },
      
    
      {
        id: "ahmed-mahran",
        name: "دكتور المهندس / أحمد مهران",
        role: "عضو مجلس نقابة المهندسين بالقاهرة",
        image: boardPhoto("ahmed-mahran.jpg", "دكتور المهندس أحمد مهران"),
      },
      {
        id: "john-ghaly",
        name: "م / جون غالي حنا",
        role: "عضو مجلس نقابة المهندسين بالقاهرة",
        image: boardPhoto("yehya-elrashedy.jpg", "المهندس جون غالي حنا"),
      },
    ],
    activitiesTitle: "أنشطة اللجنة",
    activitiesImage: {
      src: "/images/login-construction.jpg",
      alt: "أنشطة اللجنة",
    },
    activities: [
      {
        id: "art-workshops",
        title: "ورش العمل الفنية",
        description:
          "توفر ورش العمل الفنية فرصة ملائمة لتعزيز المهارات الإبداعية، حيث يتم تنظيمها في مختلف المجالات مثل الرسم والنحت والتصوير.",
      },
      {
        id: "cultural-festivals",
        title: "المهرجانات الثقافية",
        description:
          "تجمع المهرجانات الثقافية بين الفنون المختلفة، حيث تعرض الأعمال الفنية والموسيقية وتقدم عروضاً حية تجمع التراث والثقافة الحديثة.",
      },
      {
        id: "literary-events",
        title: "الفعاليات الأدبية",
        description:
          "تشمل الفعاليات الأدبية قراءات شعرية وندوات ثقافية وعروض كتب، مما يعزز من التواصل بين الكتاب والقراء.",
      },
      {
        id: "theatre",
        title: "العروض المسرحية",
        description:
          "تعتبر العروض المسرحية من الفنون التعبيرية الأساسية، حيث يتم تناول مواضيع اجتماعية وثقافية من خلال الأداء الحي.",
      },
    ],
  }
}
