import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define path to store feedback reviews
const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "feedback.json");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, location, rating, comment } = body;

    // Validation
    if (!name || !comment) {
      return NextResponse.json(
        { error: "Name and Review comment are required fields." },
        { status: 400 }
      );
    }

    // Ensure data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    // Read existing reviews
    let reviews = [];
    if (fs.existsSync(FILE_PATH)) {
      try {
        const fileContent = fs.readFileSync(FILE_PATH, "utf-8");
        reviews = JSON.parse(fileContent);
      } catch (err) {
        console.error("Error parsing feedback.json, resetting...", err);
      }
    }

    // Add new review submission
    const newReview = {
      id: Date.now().toString(),
      name,
      location: location || "Karnataka",
      rating: Number(rating) || 5,
      comment,
      timestamp: new Date().toISOString(),
    };

    reviews.push(newReview);

    // Save to file
    fs.writeFileSync(FILE_PATH, JSON.stringify(reviews, null, 2), "utf-8");

    console.log("New review feedback saved:", newReview);
    return NextResponse.json({ success: true, reviewId: newReview.id });
  } catch (error: any) {
    console.error("API feedback error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
