export default async function handler(req, res) {
    try {
        const data = await fetch('http://localhost:8080/api/v1/tickets', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        res.status(200).json(data)
    } catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
}