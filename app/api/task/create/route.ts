import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { title } = body;
  const res = await prisma.task.create({
    data: {
      title,
    },
  });
  return NextResponse.json(res);
};
