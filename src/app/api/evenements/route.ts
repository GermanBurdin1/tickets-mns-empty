import { faker } from "@faker-js/faker";
import { z } from "zod";
import db from "@/server/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const evenements = await db.evenement.findMany({
    orderBy: {
      date: "asc",
    },
    select: {
      id: true,
      titre: true,
      image: true,
      date: true,
    },
  });

  return new Response(JSON.stringify(evenements), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const schema = z.object({
  titre: z.string(),
  description: z.string(),
});

export async function POST(request: Request) {
  const response = schema.safeParse(await request.json());

  if (!response.success) {
    return new Response(
      JSON.stringify({
        message: response.error.issues.map((issue) => issue.message).join(", "),
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  const { titre, description } = response.data;

  try {
    const evenement = await db.evenement.create({
      data: {
        titre,
        description,
        image: faker.image.url({ width: 256, height: 256 }),
        date: faker.date.future({ refDate: new Date(), years: 1 }),
      },
    });
    return new Response(JSON.stringify(evenement), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ message: (e as Error).message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
