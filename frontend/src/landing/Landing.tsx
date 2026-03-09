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
                className="mt-18 text-center"
            >
                <Title 
                    heading="Your money, simplified."
                    subheading="Keep track of your money with us"
                />
            </section> 
        </html>
    )
}

export default LandingPage