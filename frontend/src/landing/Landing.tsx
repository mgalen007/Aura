import '../App.css'
import Navbar from './components/Navbar.tsx'

function LandingPage() {
    return (
        <html
            className="bg-[#F8FCEF]"
        >
            <Navbar sections={['Home', 'About Us', 'Services', 'Contact']}/>
        </html>
    )
}

export default LandingPage