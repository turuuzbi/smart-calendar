import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await prisma.task.findMany();
  return NextResponse.json(res);
};
