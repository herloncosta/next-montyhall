"use client"

import { useState } from 'react'

import Porta from '@/components/Porta'
import Presente from '@/components/Presente'
import PortaModel from '@/model/porta'

export default function Home() {
    const [p1, setP1 ] = useState(new PortaModel(1))

    return (
        <main className="h-screen flex bg-gray-700">
            <Presente />
            <Porta porta={p1} />
        </main>
    )
}
