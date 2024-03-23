-- DropIndex
DROP INDEX "accounts_id_key";

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "upvotes" SET DEFAULT 0,
ALTER COLUMN "downvotes" SET DEFAULT 0;
