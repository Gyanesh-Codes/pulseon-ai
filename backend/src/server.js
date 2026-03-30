import http from 'node:http'

const PORT = process.env.PORT || 4000

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(
    JSON.stringify({
      service: 'pulseon-ai-backend',
      status: 'ok',
      message: 'Backend starter is running.',
      path: request.url,
    }),
  )
})

server.listen(PORT, () => {
  console.log(`Pulseon Ai backend running on http://localhost:${PORT}`)
})
