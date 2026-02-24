import { NextRequest, NextResponse } from "next/server";

interface LeadRequest {
  projectType: string;
  areas: string[];
  timeline: string;
  name: string;
  phone: string;
  email: string;
  zip: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadRequest = await req.json();

    const { projectType, areas, timeline, name, phone, email, zip, message } =
      body;

    // Validate required fields
    if (!name || !phone || !email || !zip || !projectType) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields: name, phone, email, zip, and projectType are required.",
        },
        { status: 400 }
      );
    }

    // Split name into first and last
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // Attempt CRM integration if env vars are configured
    const CRM_API_KEY = process.env.CRM_API_KEY;
    const CRM_LOCATION_ID = process.env.CRM_LOCATION_ID;

    if (CRM_API_KEY && CRM_LOCATION_ID) {
      try {
        const crmResponse = await fetch(
          "https://services.leadconnectorhq.com/contacts/",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${CRM_API_KEY}`,
              Version: "2021-07-28",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              phone,
              email,
              locationId: CRM_LOCATION_ID,
              tags: [
                "spray-foam-lead",
                "nearpittsburgh",
                "website-form",
                projectType,
              ],
              customFields: [
                { key: "spray_foam_areas", value: (areas || []).join(", ") },
                { key: "project_timeline", value: timeline || "" },
                { key: "zip_code", value: zip },
              ],
              source: "sprayfoam.nearpittsburgh.com",
            }),
          }
        );

        if (!crmResponse.ok) {
          const errorText = await crmResponse.text();
          console.error(
            `[leads] CRM contact creation failed (${crmResponse.status}):`,
            errorText
          );
        } else {
          console.log("[leads] CRM contact created successfully for:", email);
        }
      } catch (crmError) {
        console.error("[leads] CRM integration error:", crmError);
        // Don't fail the lead — log and continue
      }
    } else {
      console.log(
        "[leads] CRM not configured (missing CRM_API_KEY or CRM_LOCATION_ID). Lead received:",
        { name, email, phone, zip, projectType }
      );
    }

    // Log the lead server-side regardless
    console.log("[leads] New lead received:", {
      name,
      email,
      phone,
      zip,
      projectType,
      areas,
      timeline,
      message: message || "(none)",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Your estimate request has been received!",
    });
  } catch (error) {
    // Even on error, return success so we don't lose the lead on the frontend
    console.error("[leads] Unexpected error processing lead:", error);
    return NextResponse.json({
      success: true,
      message: "Your estimate request has been received!",
    });
  }
}
