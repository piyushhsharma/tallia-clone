"use client"

import { useEffect } from "react"

export default function ClientBody({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Ensure body always has the antialiased class on hydration
    document.body.classList.add("antialiased")
  }, [])

  return <div>{children}</div>
}