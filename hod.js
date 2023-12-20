const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Function to create category
const createCategory = async (req, res) => {
  const { categoryID, categoryTitle } = req.body
  
  console.log("Creating a category");
  try{
    const newCategory = await prisma.Category.create({
      data: { categoryID, categoryTitle },
    });
  
    res.json(newCategory);
    console.log("Created a category");
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }

}


//Function to create sub category
const createSubCategory = async (req, res) => {
  const { categoryID, SubCategoryID, SubCategoryTitle } = req.body

  console.log("Creating a sub category");
  try{
    const newSubCategory = await prisma.SubCategory.create({
      data: { categoryID, SubCategoryID, SubCategoryTitle },
    });
  
    res.json(newSubCategory);
    console.log("Created a sub category");
  } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }

}

//Function to create Discipline
const createDiscipline = async (req, res) => {
  const { categoryID, subCategoryID, disciplineID, disciplineTitle } = req.body
  console.log("Creating a Discipline");
  
  try {
    const newDiscipline = await prisma.Discipline.create({
      data: { categoryID, subCategoryID, disciplineID, disciplineTitle },
    });
  
    res.json(newDiscipline);
    console.log("Created a Discipline");
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

}

//Function to create Level
const createLevels = async (req, res) => {
  const { categoryID, subCategoryID, levelID, levelTitle } = req.body
  
  console.log("Creating a Level");
  try {
    const newLevels = await prisma.Levels.create({
      data: { categoryID, subCategoryID, levelID, levelTitle },
    });
  
    res.json(newLevels);  
    console.log("Created a Level"); 
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

}

//Function to create Subject List
const createSubjectList = async (req, res) => {
  const { categoryID, subCategoryID, subjectId, subjectTitle } = req.body

  console.log("Creating a Subject List");
  try {
    const newSubjectList = await prisma.SubjectList.create({
      data: { categoryID, subCategoryID, subjectId, subjectTitle },
    });
  
    res.json(newSubjectList);
    console.log("Created a Subject List");
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

}

//Function to Fetch Category
const getcategory = async (req, res) => {
  console.log("Fetching category");
  try {
    const category = await prisma.Category.findMany();
    res.json(category);
    console.log("Fetched category");
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

}

//Function to Fetch SubCategory
const getSubCategory = async (req, res) => {
  console.log("Fetching a sub category");
  try {
    const subCategory = await prisma.SubCategory.findMany();
    res.json(subCategory);
    console.log("Fetched a sub category");
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

}

//Function to Fetch Discipline
const getDiscipline = async (req, res) => {
  console.log("Fetching Discipline");
  try {
    const discipline = await prisma.Discipline.findMany();
  res.json(discipline);
  console.log("Fetched Disciplinesub category");
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
  
}

//Function to Fetch levels
const getLevels = async (req, res) => {
  console.log("Fetching levels");
  try {
    const levels = await prisma.Levels.findMany();
    res.json(levels);
    console.log("Fetched levels");
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

}

//Function to Fetch Subject List
const getSubjectList = async (req, res) => {
  console.log("Fetching Subject List");
  try {
    const subjectList = await prisma.SubjectList.findMany();
    res.json(subjectList);
    console.log("Fetched Subject List");
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

}

// //Function to create Subject Master
// const createSubjectMaster = async (req, res) => {
//   const { category, subCategory, dicipline, level, subName } = req.body

//   console.log("Creating a Subject Master");
//   try {
//     const newSubjectMaster = await prisma.Category.create({
//       data: { category, subCategory, dicipline, level, subName },
//     });
  
//     res.json(newSubjectMaster);
//     console.log("Created a Subject Master");
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }

// }

// //Function to Update Subject Master
// const updateSubjectMaster = async (req, res) => {
//   const ID = parseInt(request.params.id)
//   const { category, subCategory, dicipline, level, subName } = req.body

//   console.log("Updating Subject Master");
//   try {
//     const newSubjectMaster = await prisma.SubjectMaster.update({
//       where:{ id : ID},
//       data: { category, subCategory, dicipline, level, subName },
//     });
  
//     res.json(newSubjectMaster);
//     console.log(`${ID} : ID isUpdated Subject Master`);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }

// }

// //Function to Fetch Subject Master
// const getSubjectMaster = async (req, res) => {
//   console.log("Fetching Subject Master");
//   try {
//     const subjectMaster = await prisma.SubjectMaster.findMany();
//     res.json(subjectMaster);
//     console.log("Fetched Subject Master");
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }

// }

// //Function to Delete SubjectMaster
// const deleteSubjectMaster = async (req, res) => {
//   const ID = parseInt(req.params.id)
  
//   console.log("Deleting SubjectMaster");
//   try {
//     const deletedSubjectMaster = await prisma.SubjectMaster.delete({
//       where: { id: ID },
//     });
//     console.log(`${ID} : ID is Deleted SubjectMaster`);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }

// }

//Function to Fetch Sub Categories
const getSubCategories = async (req, res) => {
  const categoryID = req.params.id

  console.log("Fetching a sub category");
  try {
    const getSubCategory = await prisma.SubCategory.findMany({
      where: { categoryID : categoryID },
      // select:{ SubCategoryID: true, SubCategoryTitle : true },
    });
    res.json(getSubCategory);
    console.log("Fetched a sub category");
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

}

//Function to Fetch Discipline Levels Subject
const getDisciplineLevelsSubject = async (req, res) => {
  const categoryId = req.params.categoryID
  const subCategoryId = req.params.subCategoryID

  console.log("Fetching a Discipline, Levels, Subject Levels");
  try {
    const getDiscipline = await prisma.Discipline.findMany({
      where: { categoryID : categoryId, subCategoryID : subCategoryId },
      // select:{ disciplineID: true, disciplineTitle : true },
    });

    const getLevels = await prisma.Levels.findMany({
      where: { categoryID : categoryId, subCategoryID : subCategoryId },
      // select:{ levelID: true, levelTitle : true },
    });

    const getSubjectList = await prisma.SubjectList.findMany({
      where: { categoryID : categoryId, subCategoryID : subCategoryId },
      // select:{ subjectId: true, subjectTitle : true },
    });
    
    res.json({ Discipline: [getDiscipline], Levels:[getLevels], Subject_List: [getSubjectList]});
    console.log("Fetched a Discipline, Levels, Subject Levels");
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

//Function to create subject
const createSubject = async (req, res) => {
  const { description, chapters, semisters, status, category, subCategory, dicipline, level, subName } = req.body
  
  console.log("Creating a Subject");
  try{
    const newSubject = await prisma.Subject.create({
      data: { description, chapters, semisters, status, category, subCategory, dicipline, level, subName },
    });
  
    res.json(newSubject);
    console.log("Created a Subject");
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }

}

//Function to Fetch Subject 
const getSubject = async (req, res) => {
  console.log("Fetching Subject ");
  try {
    const subject = await prisma.Subject.findMany();
    res.json(subject);
    console.log("Fetched Subject");
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

}

//Function to Delete Subject
const deleteSubject = async (req, res) => {
  const ID = req.params.id
  
  console.log("Deleting Subject");
  try {
    const deletedSubject = await prisma.Subject.delete({
      where: { id: ID },
    });
    console.log(`${ID} : ID is Deleted Subject`);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }

}

// Function to update Subject Name
const updateSubjectName = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  try {
    const updatedSubject = await prisma.Subject.update({
      where: { id: id },
      data: { description: description },
    });

    res.json({ sts: true, data: updatedSubject });
  } catch (error) {
    console.error('Error updating subject name:', error);
    res.status(500).json({ sts: false, error: 'Internal server error' });
  }
};

// Function to enable/disable Subject
const enableDisableSubject = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedSubject = await prisma.Subject.update({
      where: { id: id },
      data: { status: status },
    });

    res.json({ sts: true, data: updatedSubject });
  } catch (error) {
    console.error('Error enabling/disabling subject:', error);
    res.status(500).json({ sts: false, error: 'Internal server error' });
  }
};

module.exports = {
  createCategory,
  createSubCategory,
  createDiscipline,
  createLevels,
  createSubjectList,
  getcategory,
  getSubCategory,
  getDiscipline,
  getLevels,
  getSubjectList,
  // createSubjectMaster,
  // getSubjectMaster,
  // updateSubjectMaster,
  // deleteSubjectMaster,
  getSubCategories,
  getDisciplineLevelsSubject,
  createSubject,
  getSubject,
  updateSubjectName,
  enableDisableSubject,
  deleteSubject
}