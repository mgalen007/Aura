
interface NavbarProps {
    sections: string[]
}

function Navbar({ sections }: NavbarProps) {
    return (
        <nav
            className="bg-[#F8FCEF] h-18 flex justify-between py-2 px-6 items-center shadow-sm border border-[#000]/30 fixed top-0 w-full"
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
                                className="cursor-pointer font-bold text-[#070902]/70 hover:text-[#070902]/95"
                            >
                                {section}
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section>
                <button
                    className="bg-[#A2D439] text-sm font-bold py-2 px-5 border border-black/50 rounded-lg"
                >
                    Get Started
                </button>
            </section>
        </nav>
    )
}

export default Navbar