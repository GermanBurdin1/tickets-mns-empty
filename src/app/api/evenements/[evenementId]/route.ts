import db from "@/server/db";

export const dynamic = "force-dynamic";

export async function GET(
  _: Request,
  context: { params: { evenementId: string } },
) {
  const evenementId = context.params.evenementId;

  const evenement = await db.evenement.findUnique({
    where: {
      id: evenementId,
    },
  });

  if (!evenement) {
    return new Response(JSON.stringify({ message: "Not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(evenement), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
