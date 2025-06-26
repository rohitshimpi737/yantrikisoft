// app/api/contact/route.ts (for Next.js 13+ with app router)
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, company, message } = body;

        const data = await resend.emails.send({
            from: "Yantrikisoft <onboarding@resend.dev>",
            to: ["shimpirohit02@gmail.com"],
            subject: `New contact from ${name}`,
            replyTo: email, // now you can directly reply to the user's email
            html: `
    <h2>New Contact Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong><br/>${message}</p>
  `,
        });


        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
        });
    } catch (err) {
        console.error("Email error:", err);
        return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
}
