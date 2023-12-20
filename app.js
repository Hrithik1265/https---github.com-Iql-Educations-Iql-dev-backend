const hodmodule = require('./hod');
const teachermodule = require('./teacher'); 
const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const PORT = 3000;

app.use(express.json());

// Endpoints
app.post('/category', hodmodule.createCategory)
app.post('/subCategory', hodmodule.createSubCategory)
app.post('/discipline', hodmodule.createDiscipline)
app.post('/levels', hodmodule.createLevels)
app.post('/subjectList', hodmodule.createSubjectList)



app.get('/subCategory', hodmodule.getSubCategory)
app.get('/discipline', hodmodule.getDiscipline)
app.get('/levels', hodmodule.getLevels)
app.get('/subjectList', hodmodule.getSubjectList)

app.get('/api/v1/node/hod/levels', hodmodule.getcategory)

app.get('/api/v1/node/hod/levels/?category=:id', hodmodule.getSubCategories)

app.get('/api/v1/node/hod/levels//category=:categoryID&sub_category=:subCategoryID', hodmodule.getDisciplineLevelsSubject)


// app.get('/subjectMaster', hodmodule.getSubjectMaster)
// app.post('/subjectMaster', hodmodule.createSubjectMaster)
// app.put('/subjectMaster/:id', hodmodule.updateSubjectMaster)
// app.delete('/subjectMaster/:id', hodmodule.deleteSubjectMaster)

app.get('/api/v1/node/hod/subject/', hodmodule.getSubject)
app.post('/api/v1/node/hod/subject', hodmodule.createSubject)
// app.put('/subjectMaster/:id', hodmodule.updateSubject)
app.delete('/api/v1/node/hod/group/subject/:id', hodmodule.deleteSubject)

// Endpoint to update Subject Name
app.patch('/api/v1/node/hod/group/subject/:id', hodmodule.updateSubjectName);

// Endpoint to enable/disable Subject
app.put('/api/v1/node/hod/group/subject/:id', hodmodule.enableDisableSubject);



//Endpoints  
app.post('/api/v1/node/hod/create/teacher', teachermodule.createTeacher)
app.get('/api/v1/node/hod/create/teacher', teachermodule.getAllTeachers)
app.delete('/api/v1/node/hod/teacher/delete/:id',teachermodule.deleteTeacherById)
app.put('/api/v1/node/hod/teacher/:id',teachermodule.updateTeacherStatus)
app.post('/api/v1/node/hod/teacher/notify',teachermodule.notifymessage)
   


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
