import type {
  Department,
  DepartmentsPageContent,
} from "../types/departments-content.types"

const departmentImage = {
  src: "/images/login-construction.jpg",
  alt: "اجتماع داخل إحدى إدارات النقابة",
}

const description =
  "المذكرة الإيضاحية هي مذكرة مختصرة للقانون لعرضها من وكيل مجلس الشعب لأخذ الموافقة عليها من رئيس السلطة التنفيذية، واللائحة هي قرار وزاري من وزير الري لعمل النظام الداخلي لنقابة المهندسين."

function department(
  id: string,
  title: string,
  imageAlt: string,
  detailsHref = `/departments/${id}`
): Department {
  return {
    id,
    title,
    description,
    detailsHref,
    image: { ...departmentImage, alt: imageAlt },
  }
}

export const departmentsPageContent: DepartmentsPageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "إدارات النقابة" }],
  title: "إدارات النقابة",
  detailsLabel: "تعرف على المزيد",
  departments: [
    department(
      "syndicate-services",
      "إدارة الخدمات النقابية",
      "اجتماع داخل إدارة الخدمات النقابية"
    ),
    department(
      "syndicate-clubs",
      "أندية النقابة",
      "نشاط اجتماعي لأعضاء النقابة",
      "/clubs"
    ),
  ],
}
