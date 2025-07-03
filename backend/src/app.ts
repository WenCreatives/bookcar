import './instrument'
import * as Sentry from '@sentry/node'
import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import nocache from 'nocache'
import cookieParser from 'cookie-parser'
import i18n from './lang/i18n'
import * as env from './config/env.config'
import cors from './middlewares/cors'
import allowedMethods from './middlewares/allowedMethods'
import supplierRoutes from './routes/supplierRoutes'
import bookingRoutes from './routes/bookingRoutes'
import locationRoutes from './routes/locationRoutes'
import notificationRoutes from './routes/notificationRoutes'
import carRoutes from './routes/carRoutes'
import userRoutes from './routes/userRoutes'
import stripeRoutes from './routes/stripeRoutes'
import countryRoutes from './routes/countryRoutes'
import paypalRoutes from './routes/paypalRoutes'
import ipinfoRoutes from './routes/ipinfoRoutes'
import bankDetailsRoutes from './routes/bankDetailsRoutes'
import * as helper from './common/helper'

const app = express()

// Configure Helmet
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'", 'http://localhost:4002'],
        frameSrc: ["'self'"],
        childSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'blob:'],
      },
    },
  })
)

app.use(nocache())
app.use(compression({ threshold: 0 }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json({ limit: '50mb' }))

// Configure CORS
app.use(cors())
app.options('*', cors()) // Enable pre-flight for all routes

app.use(cookieParser(env.COOKIE_SECRET))
app.use(allowedMethods)

// Serve static files from the CDN directory
app.use('/cdn', express.static(env.CDN_ROOT))

app.use('/', supplierRoutes)
app.use('/', bookingRoutes)
app.use('/', locationRoutes)
app.use('/', notificationRoutes)
app.use('/', carRoutes)
app.use('/', userRoutes)
app.use('/', stripeRoutes)
app.use('/', countryRoutes)
app.use('/', paypalRoutes)
app.use('/', ipinfoRoutes)
app.use('/', bankDetailsRoutes)

if (env.ENABLE_SENTRY) {
  Sentry.setupExpressErrorHandler(app)
}

i18n.locale = env.DEFAULT_LANGUAGE

await helper.mkdir(env.CDN_USERS)
await helper.mkdir(env.CDN_TEMP_USERS)
await helper.mkdir(env.CDN_CARS)
await helper.mkdir(env.CDN_TEMP_CARS)
await helper.mkdir(env.CDN_LOCATIONS)
await helper.mkdir(env.CDN_TEMP_LOCATIONS)
await helper.mkdir(env.CDN_CONTRACTS)
await helper.mkdir(env.CDN_TEMP_CONTRACTS)
await helper.mkdir(env.CDN_LICENSES)
await helper.mkdir(env.CDN_TEMP_LICENSES)

export default app
