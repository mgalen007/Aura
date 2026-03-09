import '../App.css'
import Navbar from './components/Navbar.tsx'
import Title from './components/Title.tsx'
import FeatureCard from './components/FeatureCard.tsx'
import type { IconName } from './components/FeatureCard.tsx'
import Button from './components/Button.tsx'

interface Feature {
    title: string,
    description: string,
    icon: IconName
}

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

function LandingPage() {
    return (
        <div
            className="bg-[#F8FCEF] fixed top-0 w-full h-full"
        >
            <Navbar
                sections={['Home', 'About Us', 'Services', 'Contact']}
            />
            <section
                className="mb-18 mt-36 text-center"
            >
                <Title 
                    heading="Your money, simplified."
                    subheading="Keep track of your money with us"
                />
            </section> 
            <section
                className="text-center text-2xl font-medium mt-4"
            >
                <h2>
                    <span>
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
                className="flex w-[58%] mx-auto mt-15 justify-between"
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
            <section
                className="w-[21%] mx-auto flex justify-between mt-15"
            >
                <Button 
                    type="primary"
                    text="Start Budgeting"
                />
                <Button 
                    type="secondary"
                    text="See how it works"
                />
            </section>
        </div>
    )
}

export default LandingPage