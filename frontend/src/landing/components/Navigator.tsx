
interface NavigatorProps {
    nbr: number
}

function Navigator({ nbr }: NavigatorProps) {
    const images: number[] = []
    for (let n = 1; n <= nbr; n++) {
        images.push(n)
    }
    return (
        <div
            className="w-17.5 mx-auto mt-10 flex gap-1"
        >
            {images.map(image => {
                return (
                    <div
                        key={image}
                        className={
                            image == 2 ? (
                                `bg-[#A2D439] h-2.75 w-[20%] border border-black/30 rounded-[50%]`
                            ) : (
                                "h-2.75 w-[20%] border border-black/30 rounded-[50%]"                           )
                        }
                    >
                    </div>
                )
            })}
        </div>
    )
}

export default Navigator