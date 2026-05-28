import React from 'react'
import PaymentPage from '@/components/PaymentPage'

const UsernamePage = async ({ params }) => {
    const { username } = await params;

    return (
        <PaymentPage username={username} />
    )
}

export default UsernamePage


