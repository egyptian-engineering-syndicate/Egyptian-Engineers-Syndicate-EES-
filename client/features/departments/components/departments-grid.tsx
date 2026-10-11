import type { DepartmentsPageContent } from "../types/departments-content.types"
import { DepartmentCard } from "./department-card"

interface DepartmentsGridProps {
  content: DepartmentsPageContent
}

export function DepartmentsGrid({ content }: DepartmentsGridProps) {
  return (
    <ul className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
      {content.departments.map((department) => (
        <li key={department.id}>
          <DepartmentCard
            department={department}
            detailsLabel={content.detailsLabel}
          />
        </li>
      ))}
    </ul>
  )
}
