import express from 'express'
import albumControllers from '../controllers/albumControllers';

const app = express.Router();
app.get('/:albumId/photos',albumControllers.listOfAlbum);

export default app;