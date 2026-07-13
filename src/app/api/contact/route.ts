import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define path to store contact submissions
const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "submissions.json");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, location, message } = body;

    // Validation
    if (!name || !phone || !service || !location) {
      return NextResponse.json(
        { error: "Name, Phone, Service, and Location are required fields." },
        { status: 400 }
      );
    }

    // Ensure data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    // Read existing submissions
    let submissions = [];
    if (fs.existsSync(FILE_PATH)) {
      try {
        const fileContent = fs.readFileSync(FILE_PATH, "utf-8");
        submissions = JSON.parse(fileContent);
      } catch (err) {
        console.error("Error parsing submissions.json, resetting...", err);
      }
    }

    // Add new submission
    const newSubmission = {
      id: Date.now().toString(),
      name,
      phone,
      service,
      location,
      message: message || "",
      timestamp: new Date().toISOString(),
    };

    submissions.push(newSubmission);

    // Save to file
    fs.writeFileSync(FILE_PATH, JSON.stringify(submissions, null, 2), "utf-8");

    console.log("New contact submission saved:", newSubmission);
    return NextResponse.json({ success: true, submissionId: newSubmission.id });
  } catch (error: any) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
