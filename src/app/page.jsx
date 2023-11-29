import Porta from '@/components/Porta'
import Presente from '@/components/Presente'

export default function Home() {
    return (
        <main className="h-screen flex bg-gray-700">
            <Presente />
            <Porta numero={1} />
            <Porta numero={2} />
            <Porta numero={3} />
        </main>
    )
}
