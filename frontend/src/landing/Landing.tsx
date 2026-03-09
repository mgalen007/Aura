import '../App.css'
import Navbar from './components/Navbar.tsx'
import Title from './components/Title.tsx'
import FeatureCard from './components/FeatureCard.tsx'
import type { IconName } from './components/FeatureCard.tsx'

interface Feature {
    title: string,
    description: string,
    icon: IconName
}

function LandingPage() {
    const features: Feature[] = [
        {
            title: 'Smart Tracking',
            description: 'We help you track all your transactions day-to-day',
            icon: 'eye'
        },
        {
            title: 'Transaction History',
            description: 'Get access to all your income & expense history and records',
            icon: 'book'
        },
        {
            title: 'Economy Tips',
            description: 'Get daily tips to improve economic habits and grow your savings',
            icon: 'money'
        }
    ]
    return (
        <div
            className="bg-[#F8FCEF] min-h-screen"
        >
            <Navbar
                sections={['Home', 'About Us', 'Services', 'Contact']}
            />
            <section
                className="m-18 text-center"
            >
                <Title 
                    heading="Your money, simplified."
                    subheading="Keep track of your money with us"
                />
            </section> 
            <section
                className="text-center text-2xl font-medium"
            >
                <h2>
                    <span
                        className="font-[Gugi]"
                    >
                        AURA
                    </span>
                    &nbsp;&nbsp;
                    <span
                        className="font-bold"
                    >
                    is the best platform for budgeting
                    </span>
                </h2>
            </section>
            <section
                className="flex w-[58%] mx-auto mt-12 justify-between"
            >
                {features.map(feature => {
                    return (
                        <FeatureCard 
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    )
                })}
            </section>
        </div>
    )
}

export default LandingPage