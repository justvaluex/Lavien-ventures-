import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().length(0, "Honeypot field should be empty"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate honeypot first (should be empty)
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json(
        { error: "Form submission blocked" },
        { status: 400 }
      );
    }
    
    // Validate data
    const validatedData = contactSchema.parse(body);
    
    // Check for required environment variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
    const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
    
    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      // Log error for debugging
      console.error("Email configuration missing. Please set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL environment variables.");
      
      return NextResponse.json(
        { 
          error: "Email service temporarily unavailable. Please try again later or contact us directly.",
          success: false 
        },
        { status: 503 }
      );
    }
    
    // In production, you would send email via Resend here
    // For now, we'll just log it and return success
    console.log("Contact form submitted:", {
      to: CONTACT_TO_EMAIL,
      from: CONTACT_FROM_EMAIL,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      service: validatedData.service,
      message: validatedData.message,
    });
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json(
      { 
        success: true,
        message: "Thank you! Your message has been sent successfully."
      },
      { status: 200 }
    );
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: "Validation failed",
          details: error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }
    
    console.error("Contact form error:", error);
    return NextResponse.json(
      { 
        error: "Something went wrong. Please try again later.",
        success: false 
      },
      { status: 500 }
    );
  }
}
