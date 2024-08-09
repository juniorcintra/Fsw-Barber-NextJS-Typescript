"use server";

import { db } from "../_lib/prisma";
import { endOfDay, startOfDay } from "date-fns";

interface GetBookingParams {
  serviceId: string;
  date: Date;
}

export const getBookings = ({ date }: GetBookingParams) => {
  return db.booking.findMany({
    where: { date: { lte: endOfDay(date), gte: startOfDay(date) } },
  });
};
