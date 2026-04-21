"use client"
import React, { useEffect } from 'react' // 1. Added useEffect
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const { data: session, status } = useSession() // 2. Added status to track loading
  const router = useRouter() // 3. Hook moved to top level

  useEffect(() => {
    // 4. Only redirect if the session check is finished and no session exists
    if (status !== "loading" && !session) {
      router.push('/login')
    }
  }, [session, status, router])

  // 5. Optional: Show a loading state while checking authentication
  if (status === "loading") {
    return <div>Loading...</div>
  }

  // 6. Only show dashboard content if session exists
  if (!session) {
    return null
  }

  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard



