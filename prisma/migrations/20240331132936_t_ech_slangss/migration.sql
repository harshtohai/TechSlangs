-- DropForeignKey
ALTER TABLE "Voted" DROP CONSTRAINT "Voted_wordId_fkey";

-- DropForeignKey
ALTER TABLE "Word" DROP CONSTRAINT "Word_userId_fkey";

-- AddForeignKey
ALTER TABLE "Voted" ADD CONSTRAINT "Voted_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
