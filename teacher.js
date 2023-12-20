const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTeacher = async (req, res) => {
  const { name, email, is_teacher, password, terms_and_condition } = req.body

  try {
    const newTeacher = await prisma.Users.create({
      data: { name, email, is_teacher, password, terms_and_condition },
    });

    res.json(newTeacher); 
  } catch (error) {
    console.error('Error creating teacher:', error);
    res.status(500).json({ error: 'Error creating teacher' });
  }
};

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await prisma.Users.findMany({
      where: {
        is_teacher: true 
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        terms_and_condition: true,
        is_teacher: true
      }
    });
  

    res.status(200).json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.status(500).json({ error: 'Error fetching teachers' });
  }
};

const deleteTeacherById = async (req, res) => {
  const teacherId = req.params.id;

  try {
    const deletedTeacher = await prisma.Users.delete({
      where: { id: teacherId },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        terms_and_condition: true,
        is_teacher: true,
      },
    });

    if (!deletedTeacher) {
      return res.status(404).json({ error: 'Teacher not found or already deleted' });
    }

    console.log(`${teacherId}: Teacher deleted`);
    res.status(200).json({ message: 'Teacher deleted successfully', deletedTeacher });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Teacher not found or already deleted' });
    }

    console.error('Error deleting teacher:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateTeacherStatus = async (req, res) => {
  const { id } = req.params;
  const { is_teacher } = req.body;

  try {
    const updatedTeacher = await prisma.Users.update({
      where: { id },
      data: { is_teacher },
      select: { is_teacher: true },
    });

    const statusMessage = updatedTeacher.is_teacher ? 'Teacher enabled' : 'Teacher disabled';

    res.status(200).json({  message: `${statusMessage} successfully`, teacher: updatedTeacher });
  } catch (error) {
    console.error('Error updating teacher status:', error);
    res.status(500).json({ error: 'Error updating teacher status' });
  }
};

const notifymessage = ('/notify', (req, res) => { 
const { send_all, message } = req.body;
  
    if (send_all && typeof message === 'string') {
      try {
        console.log(`Notification sent to all teachers: ${message}`);
        res.status(200).json({ sts: true, msg: '🔔 Notification sent!' });
      } catch (error) {
        console.error('Error sending notifications:', error);
        res.status(500).json({ sts: false, msg: 'Error sending notifications' });
      }
    } else {
      res.status(400).json({ sts: false, msg: 'Please provide a valid "send_all" flag and a "message" string' });
    }
  });

module.exports = {
  createTeacher,
  getAllTeachers,
  deleteTeacherById,
  updateTeacherStatus,
  notifymessage
}