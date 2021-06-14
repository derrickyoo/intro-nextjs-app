import nc from 'next-connect'
import notes from '../../../data/data'

// put note => PUT /api/notes/:id
// patch all notes => PATCH /api/notes/:id
// delete all notes => DELETE /api/notes/:id

const getNote = id => notes.find(n => n.id === parseInt(id))

const handler = nc()
  .get((req, res) => {
    const note = getNote(req.query.id)

    if (!note) {
      res.status(404)
      res.end()
      return
    }

    res.json({data: note})
  })

export default handler
 