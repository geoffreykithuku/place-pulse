import express from 'express'
import { signup, login, google, update } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/google', google)
router.put('/update', update)

router.get('/test', (req, res) => {
    res.json({"message": "Helloo"})
})

export default router