import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const DELETE = async (req: Request) => {
  const body = await req.json();
  const { id } = body;
  const res = await prisma.task.delete({
    where: {
      id,
    },
  });
  return NextResponse.json(res);
};
