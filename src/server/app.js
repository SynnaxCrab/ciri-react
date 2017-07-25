import { config } from 'dotenv'

import Koa from 'koa'
import path from 'path'
import mount from 'koa-mount'
import serve from 'koa-static'

config()

const app = new Koa()
const assets = new Koa()

assets.use(serve(path.resolve(__dirname, '..', 'assets')))

app.use(serve(path.resolve(__dirname, '..', 'html')))
app.use(mount('/assets', assets))

const port = 8888
console.log(`Started on port: ${port}`)
app.listen(port)
