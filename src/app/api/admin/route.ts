import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    const DATA_DIR = path.join(process.cwd(), "data");
    const SUBMISSIONS_PATH = path.join(DATA_DIR, "submissions.json");
    const FEEDBACK_PATH = path.join(DATA_DIR, "feedback.json");

    let submissions = [];
    let feedback = [];

    // Read submissions
    if (fs.existsSync(SUBMISSIONS_PATH)) {
      try {
        const fileContent = fs.readFileSync(SUBMISSIONS_PATH, "utf-8");
        submissions = JSON.parse(fileContent);
      } catch (err) {
        console.error("Error reading submissions.json in admin API", err);
      }
    }

    // Read feedback reviews
    if (fs.existsSync(FEEDBACK_PATH)) {
      try {
        const fileContent = fs.readFileSync(FEEDBACK_PATH, "utf-8");
        feedback = JSON.parse(fileContent);
      } catch (err) {
        console.error("Error reading feedback.json in admin API", err);
      }
    }

    // Sort by timestamp descending (newest first)
    submissions.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    feedback.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return new NextResponse(
      JSON.stringify({ submissions, feedback }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (error: any) {
    console.error("Admin API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
