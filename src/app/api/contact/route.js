import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();

        // INTEGRATION INSTRUCTION:
        // To save to Google Sheets:
        // 1. Create a Google Sheet
        // 2. Extensions > Apps Script
        // 3. Paste a script to `doPost(e)` and append row
        // 4. Deploy as Web App (Anyone can access)
        // 5. Add URL to .env as GOOGLE_SHEET_WEBHOOK_URL

        // If the environment variable is set, send data to Google Sheets
        if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
            try {
                await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });
            } catch (sheetError) {
                console.error("Failed to save to Google Sheets:", sheetError);
                // We don't fail the request here, just log the error
            }
        }

        console.log("Lead received:", body);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
