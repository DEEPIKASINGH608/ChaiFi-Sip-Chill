import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation";

const UsernamePage = async ({ params }) => {
    const resolvedParams = await params;
    const { username } = resolvedParams;
    if (!username) {
        notFound();
    }
    return (
        <PaymentPage username={username} />
    )
}

export default UsernamePage


