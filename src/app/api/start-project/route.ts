import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema for multi-step form
const startProjectSchema = z.object({
  // Step 1: About you
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  
  // Step 2: Project details
  services: z.array(z.string()).min(1, "Please select at least one service"),
  description: z.string().min(20, "Project description must be at least 20 characters"),
  currentStage: z.string().optional(),
  
  // Step 3: Budget & timeline
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  howHeard: z.string().optional(),
  
  // Honeypot
  honeypot: z.string().length(0, "Honeypot field should be empty"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate honeypot first
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json(
        { error: "Form submission blocked" },
        { status: 400 }
      );
    }
    
    // Validate data
    const validatedData = startProjectSchema.parse(body);
    
    // Check for required environment variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
    const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
    
    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      console.error("Email configuration missing. Please set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL environment variables.");
      
      return NextResponse.json(
        { 
          error: "Project intake system temporarily unavailable. Please try again later.",
          success: false 
        },
        { status: 503 }
      );
    }
    
    // Log the project intake
    console.log("New project intake:", {
      to: CONTACT_TO_EMAIL,
      from: CONTACT_FROM_EMAIL,
      subject: `New Project Intake: ${validatedData.name} - ${validatedData.services.join(', ')}`,
      ...validatedData,
    });
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return NextResponse.json(
      { 
        success: true,
        message: "Thank you! Your project inquiry has been submitted successfully. We'll be in touch within 24-48 hours."
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
    
    console.error("Project intake error:", error);
    return NextResponse.json(
      { 
        error: "Something went wrong. Please try again later.",
        success: false 
      },
      { status: 500 }
    );
  }
}
