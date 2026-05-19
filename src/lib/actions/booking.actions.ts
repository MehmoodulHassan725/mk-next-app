'use server'

import Booking from "@/database/bookingmodel";
import connectDB from "../mongoose";

export const createBooking = async ({eventId, email, slug}:{eventId: string, email: string, slug: string}) =>{
    try {
        await connectDB();
        await Booking.create({eventId, email, slug})
        return {success: true , message: 'Booking created successfully' };
    } catch (e) {
        console.error(' Booking Creation Failed', e);
        return {success: false };
    }
} 