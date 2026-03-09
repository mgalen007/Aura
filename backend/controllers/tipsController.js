import OpenAI from 'openai'

const client = new OpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: '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'
})

const createPrompt = limit => [
    {
        role: 'system',
        content: `
            You are a helpful finance assistant, that provides diverse helpful tips when requested.
            You return a JSON response, and JSON ONLY. That JSON should always be valid. 
            The user gives you a number and you reply with a number of tips exactly equal to that
            number or one less than it.
            Example: (user) 2
            (system) {
                "tips": [
                    "Always keep track of your expenses",
                    "Do not spend money on unnecessary things"
                ]
            }
        `
    },
    {
        role: 'user',
        content: `${limit}` || 5
    }
]

const getTips = async (req, res) => {
    try {
        const response = await client.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: createPrompt(req.query.limit)
        })
        const content = response.choices[0].message.content
        const data = JSON.parse(content)
        res.json(data)
    } catch(error) {
        console.error(error)
        res.status(500).json({
            error: 'An error occurred, try again later'
        })
    }
}

export default getTips