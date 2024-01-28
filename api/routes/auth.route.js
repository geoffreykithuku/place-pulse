import express from 'express'
import { signup } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signup', signup)

router.get('/test', (req, res) => {
    res.json({"message": "Helloo"})
})

export default router