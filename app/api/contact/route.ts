
/*
    Contact API temporarily disabled for deployment.
    Original implementation (DB writes via Prisma) is commented out below.

    If you want to re-enable, restore the implementation and ensure
    `DATABASE_URL` is set and migrations applied.

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(5),
    message: z.string().min(10),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = formSchema.parse(body);

        const contact = await prisma.contactMessage.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                subject: validatedData.subject,
                message: validatedData.message,
            },
        });

        return NextResponse.json(
            { message: "Message sent successfully", id: contact.id },
            { status: 200 }
        );
    } catch (error) {
        console.error("Failed to save message:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

*/

import { NextResponse } from "next/server";

// Fallback handler: returns 503 to indicate API is disabled for deployment.
export async function POST(req: Request) {
    return NextResponse.json(
        { message: "Contact API is temporarily disabled for deployment" },
        { status: 503 }
    );
}
