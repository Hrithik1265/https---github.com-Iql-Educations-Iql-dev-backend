/*
  Warnings:

  - You are about to drop the column `subjectId` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the `SubjectMaster` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dicipline` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subCategory` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subName` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Discipline" DROP CONSTRAINT "Discipline_subCategoryID_fkey";

-- DropForeignKey
ALTER TABLE "Levels" DROP CONSTRAINT "Levels_subCategoryID_fkey";

-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "SubjectList" DROP CONSTRAINT "SubjectList_subCategoryID_fkey";

-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "subjectId",
ADD COLUMN     "category" VARCHAR(200) NOT NULL,
ADD COLUMN     "dicipline" VARCHAR(200) NOT NULL,
ADD COLUMN     "level" VARCHAR(200) NOT NULL,
ADD COLUMN     "subCategory" VARCHAR(200) NOT NULL,
ADD COLUMN     "subName" VARCHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "password" TEXT NOT NULL;

-- DropTable
DROP TABLE "SubjectMaster";
