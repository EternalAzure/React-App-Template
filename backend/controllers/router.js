const router = require('express').Router()
const { request, response } = require('express')

router.post('/', async (request, response) => {
  const body = request.body
  //do stuff
})

router.get('/', async (request, response) => {
  const body = request.body
  //do stuff
})

blogsRouter.delete('/:id', async (request, response) => {
  const id = request.params.id
  //do stuff
})

module.exports = router