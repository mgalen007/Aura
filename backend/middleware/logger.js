const logger = (req, res, next) => {
    const { ip, url, method } = req
    const time = (new Date).toLocaleTimeString()
    const date = (new Date).toLocaleDateString()
    console.log(`[${date}] ${method} ${url} from ${ip} at ${time}`)
    next()
}

export default logger