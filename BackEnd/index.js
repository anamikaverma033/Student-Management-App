
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json());
const StudentRouter = require('./Routes/StudentRoute');
const CourseRouter = require('./Routes/CourseRoute');
const FeeRouter = require('./Routes/FeeRoute');
const mongoConnect = require('./Connection');

mongoConnect('mongodb://0.0.0.0:27017/Student_Management_System_App');

app.use('/Student',StudentRouter);
app.use('/Course',CourseRouter);
app.use('/Fee',FeeRouter);

app.listen(6500);