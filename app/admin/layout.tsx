// app/admin/layout.tsx
import type React from "react"

export const metadata = {
  title: "Admin Panel - Idara Al-Khair",
  description: "Admin dashboard for Idara Al-Khair",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}