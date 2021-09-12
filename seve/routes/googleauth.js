import express from 'express'

const router = express.Router()

import { googleLogin } from '../controllers/googleauth.js'

router.post('/',googleLogin)

export default router