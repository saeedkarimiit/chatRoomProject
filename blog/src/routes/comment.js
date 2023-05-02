import express from 'express'
import ArticleController from '../controllers/article'

const router = express.Router()

router.post('/add', ArticleController.add)
router.get('/add/:articleId', ArticleController.show)

export default router
