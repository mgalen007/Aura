import '../App.css'
import Navbar from './components/Navbar.tsx'
import Title from './components/Title.tsx'

function LandingPage() {
    return (
        <html
            className="bg-[#F8FCEF]"
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
                    &nbsp;&nbsp;is the best platform for budgeting
                </h2>
            </section>
        </html>
    )
}

export default LandingPage