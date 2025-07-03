import cors from 'cors'
import * as helper from '../common/helper'
import * as env from '../config/env.config'
import * as logger from '../common/logger'

const whitelist = [
  helper.trimEnd(env.ADMIN_HOST, '/'),
  helper.trimEnd(env.FRONTEND_HOST, '/'),
  'http://localhost:3002', // Allow local frontend development
  'http://localhost:3001', // Allow local admin development
]

/**
 * CORS configuration.
 *
 * @type {cors.CorsOptions}
 */
const CORS_CONFIG: cors.CorsOptions = {
  origin: true, // Allow all origins for debugging
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

/**
 * CORS middleware.
 *
 * @export
 * @returns {*}
 */
export default () => cors(CORS_CONFIG)
