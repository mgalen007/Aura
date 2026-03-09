
interface ButtonProps {
    type: "primary" | "secondary"
    text: string
}

function Button({ type, text }: ButtonProps) {
    if (type == "primary") {
        return (
            <button
                className="bg-[#A2D439] border border-[#000]/50 py-2 px-5 rounded-lg font-bold text-black/80"
            >
                {text}
            </button>
        )
    }
    else if (type == "secondary") {
        return (
            <button
                className="bg-[#FFFFFF]/50 text-black/80 font-bold border border-[#000]/50 py-2 px-5 rounded-lg" 
            >
                {text}
            </button>
        )
    }
}

export default Button