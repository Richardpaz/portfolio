import { Resend } from "resend";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const resend = new Resend("re_Xpp51Fxx_4h7pp67vPNkucsSL6xHDcjVo");

export async function POST(req: NextRequest) {
    const { nombre, email, mensaje } = await req.json();

    const span = `<div>
                    <p>nombre : ${nombre}</p>
                    <p>email : ${email}</p>
                    <p>mensaje : ${mensaje}</p>
                </div>`
    try {
        const data = await resend.emails.send({
            from: 'Portafolio <onboarding@resend.dev>',
            to: ['richardrafaelpaz@gmail.com'],
            subject: 'portafolio/empleo',
            html: span,
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