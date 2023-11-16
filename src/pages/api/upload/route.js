import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.formData();
  console.log(data);

  //return NextResponse.json("archivo subido");
  response.status(200).json({ name: "subiendo archivo" });
}
