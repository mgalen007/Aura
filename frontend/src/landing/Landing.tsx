import '../App.css'
import Navbar from './components/Navbar.tsx'
import Title from './components/Title.tsx'
import FeatureCard from './components/FeatureCard.tsx'
import type { IconName } from './components/FeatureCard.tsx'
import Button from './components/Button.tsx'
import dashboardImage from '../assets/dashboard-preview.png'

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
            className="bg-[#F8FCEF] w-full"
        >
            <Navbar
                sections={['Home', 'About Us', 'Services', 'Contact']}
            />
            <section
                className="mb-18 mt-26 text-center"
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
            <section
                className="w-[60%] mx-auto mt-30 mb-10 flex justify-between"
            >
                <div
                    className="w-[40%]"
                >
                    <h2
                        className="font-medium text-3xl"
                    >
                        Stop guessing where your money goes
                    </h2>
                    <h4
                        className="text-black/60 font-medium text-sm w-[75%]"
                    >
                        Our dashboard shows your spending patterns, balances, and financial habits in real time
                    </h4>
                </div>
                <div>
                    <div
                        className="bg-black w-[440px] h-[280px] rounded-lg flex items-center justify-center"
                    >
                        <div>
                            <img
                                src={dashboardImage} 
                                width={420} 
                                className="rounded-lg"
                            >
                            </img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage