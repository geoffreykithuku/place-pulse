import express from 'express'
import { signup, login, google } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/google', google)


router.get('/test', (req, res) => {
    res.json({"message": "Helloo"})
})

export default router