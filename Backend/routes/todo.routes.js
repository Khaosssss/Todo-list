import express from 'express';
import Task from '../models/tasks.js';

const router = express.Router();

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new task
router.post('/', async (req, res) => {
  const todo = new Task({
    title: req.body.title
  });

  try {
    const newTask = await todo.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

// UPDATE a task
router.patch('/:id', async (req, res) => {
  try {
    const todo = await Task.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Task not found" });

    if (req.body.title !== undefined) {
      todo.title = req.body.title; // ✅ updated to title
    }
    if (req.body.completed !== undefined) {
      todo.completed = req.body.completed;
    }

    const updatedTask = await todo.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
