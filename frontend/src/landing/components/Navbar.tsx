import Button from './Button.tsx'

interface NavbarProps {
    sections: string[]
}

function Navbar({ sections }: NavbarProps) {
    return (
        <nav
            className="bg-[#F8FCEF] h-18 flex justify-between py-2 px-6 items-center shadow-sm border border-[#000]/30"
        >
            <section>
                <h2
                    className="font-[Gugi] text-xl text-[#070902]"
                >
                    AURA
                </h2>
            </section>
            <section>
                <ul
                    className="flex items-center gap-10"
                >
                    {sections.map(section => {
                        return (
                            <li
                                key={section}
                                className="cursor-pointer font-bold text-[#070902]/70 hover:text-[#6D921E] transition-all delay-75 ease-out"
                            >
                                {section}
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section>
                <Button 
                    type="primary"
                    text="Get Started"
                />
            </section>
        </nav>
    )
}

export default Navbar