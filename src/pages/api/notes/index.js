import nc from 'next-connect'
import notes from '../../../data/data'

// create note => POST /api/notes/
// get all notes => GET /api/notes/

const handler = nc()
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now()
    }

    notes.push(note)
    res.json({data: note})
  })
  .get((req, res) => {
    res.json({data: notes})
  })

export default handler
