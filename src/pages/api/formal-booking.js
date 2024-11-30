import Cors from 'cors'

const cors = Cors({
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
})

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }
    
            return resolve(result)
        })
    })
}

export default async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)

    const body = req.body

    const JSONdata = JSON.stringify(body)
    const endpoint = 'https://www.zohoapis.com/crm/v2/functions/nextjs/actions/execute?auth_type=apikey&zapikey=1003.230333a19f32b4b691676b8e1c3885a2.a6789e924c72658812c2b7c0a3103e83'
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata
    }
    
    const response = await fetch(endpoint, options)
    const result = await response.json()

    res.status(200).json(result)
}