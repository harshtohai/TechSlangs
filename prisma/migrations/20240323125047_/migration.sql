/*
  Warnings:

  - The `upvotes` column on the `Word` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `downvotes` column on the `Word` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `commentscount` column on the `Word` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `upvotes` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `posts` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[id]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `upvotes` on the `Comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `downvotes` on the `Comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Word" DROP CONSTRAINT "Word_userId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "upvotes",
ADD COLUMN     "upvotes" INTEGER NOT NULL,
DROP COLUMN "downvotes",
ADD COLUMN     "downvotes" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Word" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "word" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
DROP COLUMN "upvotes",
ADD COLUMN     "upvotes" INTEGER,
DROP COLUMN "downvotes",
ADD COLUMN     "downvotes" INTEGER,
DROP COLUMN "commentscount",
ADD COLUMN     "commentscount" INTEGER;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "upvotes",
ADD COLUMN     "upvotes" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "posts",
ADD COLUMN     "posts" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "accounts_id_key" ON "accounts"("id");

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
