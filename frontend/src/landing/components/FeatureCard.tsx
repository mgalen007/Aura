import { ScanEye, BookMarked, HandCoins } from 'lucide-react'

const icons = {
        eye: <ScanEye size={42} stroke="black" strokeWidth={2.5} />,
        book: <BookMarked size={42} stroke="black" strokeWidth={2.5} />,
        money: <HandCoins size={42} stroke="black" strokeWidth={2.5} />
}

export type IconName = keyof typeof icons

interface FeatureCardProps {
    icon: IconName,
    title: string,
    description: string
}


function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div
            className="bg-[#A2D439]/30 w-[275px] py-6 px-8 rounded-lg"
        >
            <div
                className="w-fit mx-auto mb-4"
            >
                {icons[icon]}
            </div>
            <section>
                <h2
                    className="text-xl text-center font-bold"
                >
                    {title}
                </h2>
                <h4
                    className="text-sm font-bold text-black/50 mt-1"
                >
                    {description}
                </h4>
            </section>
        </div>
    )
}

export default FeatureCard