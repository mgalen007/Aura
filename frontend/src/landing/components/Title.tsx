import '../../App.css'

interface TitleProps {
    heading: string,
    subheading: string
}

function Title({ heading, subheading }: TitleProps) {
    return (
        <>
            <h1
                className="font-extrabold text-5xl"
            >
                {heading}
            </h1>
            <h4
                className="text-black/50 font-bold mt-1"
            >
                {subheading}
            </h4>
        </>
    )
}

export default Title