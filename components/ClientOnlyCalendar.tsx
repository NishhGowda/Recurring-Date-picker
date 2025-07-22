"use client";

import dynamic from "next/dynamic";
const Calendar = dynamic(() => import("react-calendar"), { ssr: false });
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

type Props = {
  highlightedDates: string[];
};

export default function ClientOnlyCalendar({ highlightedDates }: Props) {
  return (
    <Calendar
      tileClassName={({ date }) =>
        highlightedDates.includes(format(date, "yyyy-MM-dd"))
          ? "bg-blue-500 text-white rounded-full"
          : ""
      }
    />
  );
}
