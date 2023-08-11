-- CreateTable
CREATE TABLE "Pets" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "type" VARCHAR(100),

    CONSTRAINT "Pets_pkey" PRIMARY KEY ("id")
);
