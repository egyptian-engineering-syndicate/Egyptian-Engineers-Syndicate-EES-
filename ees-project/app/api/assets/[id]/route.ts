import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const directusUrl =
    process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8056";

  let response: Response;

  try {
    response = await fetch(`${directusUrl}/assets/${id}`);
  } catch {
    return new NextResponse("Asset service is unavailable", { status: 503 });
  }

  if (!response.ok) {
    return new NextResponse("Image not found", {
      status: response.status,
    });
  }

  const contentType =
    response.headers.get("content-type") || "image/jpeg";

  const buffer = await response.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
