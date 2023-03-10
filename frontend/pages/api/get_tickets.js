export default async function handler(req, res) {
    try {
        let res = await fetch(`http://localhost:8080/api/v1/tickets`);
        return await res.json();
    } catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
}