import { Star } from 'lucide-react'

interface TestimonialProps {
    name: string,
    phrase: string,
    stars: 0 | 1 | 2 | 3 | 4 | 5
}

function TestimonialCard({ name, phrase, stars }: TestimonialProps) {
    const starTimes: number[] = []
    for (let n = 1; n <= stars; n++) {
        starTimes.push(n)
    }
    return (
        <div
            className="border border-black/50 w-[30%] flex flex-col gap-2 pt-3 pb-5 pl-4 rounded-lg bg-[#F1F4EA]"
        >
            <div
                className="flex items-center gap-3"
            >
                <div
                    className="w-10 h-10 rounded-[50%] bg-[#d9d9d9]"
                >
                </div>
                <h3
                    className="text-lg"
                >
                    {name}
                </h3>
            </div>
            <p
                className="w-[75%] mx-auto text-sm text-black/80 font-medium"
            >
                &nbsp;{phrase}
            </p>
            <div
                className="flex w-fit gap-1 ml-8 mt-2"
            >
                {
                    starTimes.map(star => {
                        return <Star key={star} size={20} fill="#A2D439" stroke="black" strokeWidth={0.75} />
                    })
                }
            </div>
        </div>
    )
}


export default TestimonialCard