import Event from "@/database/eventmodel";
import connectDB from "../mongoose";

export const getEvents = async () => {
  try {
    await connectDB();
    const events = await Event.find().sort({ createdAt: -1 });

    return {
      message: "events fetched successfully",
      events,
      status: 200,
    };
  } catch (e) {
    console.error(e);

    return {
      message: "Failed to fetch events",
      status: 500,
    };
  }
};



export const getEventBySlug = async (slug:string) => {
  try {
    await connectDB();

    // Validate slug
    if (!slug || typeof slug !== "string" || slug.trim() === "") {
      return {
        success: false,
        message: "Invalid or missing slug parameter",
        status: 400,
      };
    }

    const sanitizedSlug = slug.trim().toLowerCase();

    const event = await Event.findOne({ slug: sanitizedSlug }).lean();

    if (!event) {
      return {
        success: false,
        message: `Event with slug '${sanitizedSlug}' not found`,
        status: 404,
      };
    }

    return {
      success: true,
      message: "Event fetched successfully",
      event,
      status: 200,
    };
  } catch (error) {
    console.error("Error fetching event by slug:", error);

    if (error instanceof Error) {
      if (error.message.includes("MONGODB_URI")) {
        return {
          success: false,
          message: "Database configuration error",
          status: 500,
        };
      }

      return {
        success: false,
        message: "Failed to fetch events",
        error: error.message,
        status: 500,
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred",
      status: 500,
    };
  }
};