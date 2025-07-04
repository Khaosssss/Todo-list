import { text } from 'express';
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  dueDate: { type: Date }
});
console.log("Schema successful")
const Tasks = mongoose.model('Task', taskSchema);

export default Tasks;
