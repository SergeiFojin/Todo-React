import * as     express from "express";
const router = express.Router();
import Todos from './task-model';
import {Request, Response} from "express";

router.get('/', async (_req: Request, _res: Response) => {
    try {
        const tasksArray = await Todos.find();
        _res.status(200).send(tasksArray);
    } catch (e) {
        _res.status(400).json(e);
    }
})

router.post('/task', async (req: Request, res: Response) => {
    try {
        await Todos.create(req.body);
        const todosArray = await Todos.find();
        res.status(200).send(todosArray[todosArray.length-1]);
    } catch (e) {
        res.status(400).json(e);
    }
})

router.put('/task', async (_req: Request, _res: Response) => {
    try {
        await Todos.updateOne({_id: _req.body.id}, {isCompleted: !_req.body.isCompleted});
        _res.status(200).send(`Task with id = ${_req.body.id} was changed.`);
    } catch (e) {
        _res.status(400).json(e);
    }
})

router.delete(`/task`, async (_req: Request, _res: Response) => {
    try {
        if (_req.query.id) {
            await Todos.deleteOne({_id: _req.query.id});
            _res.status(200).send(`Task with id = ${_req.query.id} was deleted.`);
        } else {
            await Todos.deleteMany({isCompleted: true});
            _res.status(200).send(`Completed tasks was deleted.`);
        }
    } catch (e) {
        _res.status(400).json(e);
    }
})

export default router;
