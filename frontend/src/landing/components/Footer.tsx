
function Footer() {
    const date = (new Date()).toLocaleDateString()
    const year = date.slice(5)
    return (
        <div
            className="bg-black/10 mb-0 h-42"
        >
            <h1
                className="text-9xl text-black/15 w-fit translate-y-6"
            >
                AURA
            </h1>
            <p
                className="text-black/30 mt-4 ml-2"
            >
                &copy; {year} &nbsp; All rights reserved
            </p>
        </div>
    )
}

export default Footer