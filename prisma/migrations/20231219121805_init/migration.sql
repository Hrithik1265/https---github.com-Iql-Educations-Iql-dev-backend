-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "is_hod" DROP NOT NULL,
ALTER COLUMN "country_code" DROP NOT NULL,
ALTER COLUMN "phone_num" DROP NOT NULL,
ALTER COLUMN "is_active" DROP NOT NULL,
ALTER COLUMN "password_last_change" DROP NOT NULL,
ALTER COLUMN "secondary_email" DROP NOT NULL,
ALTER COLUMN "secondary_phone_num" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "student_roll_no" DROP NOT NULL,
ALTER COLUMN "is_independent_student" DROP NOT NULL,
ALTER COLUMN "created_by" DROP NOT NULL;
