import React from 'react'
import PaymentPage from '@/components/PaymentPage'

const UsernamePage = async ({ params }) => {
    // Await params as required by newer Next.js versions
    const { username } = await params;

    return (
        <PaymentPage username={username} />
    )
}

export default UsernamePage


