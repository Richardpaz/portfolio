import React from "react";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "../components/EmailTemplate";

const resend = new Resend("re_Xpp51Fxx_4h7pp67vPNkucsSL6xHDcjVo");

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["richardrafaelpaz@gmail.com"],
            subject: "Nuevo mensaje",
            react: `<span>Email enviado</span>`,
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Error enviando email" },
            { status: 500 }
        );
    }
}