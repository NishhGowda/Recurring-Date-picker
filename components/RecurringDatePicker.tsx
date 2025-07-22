"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ClientOnlyCalendar from "./ClientOnlyCalendar";
import "react-calendar/dist/Calendar.css";

import React, { useState } from "react";
import { format, addDays, addWeeks, addMonths } from "date-fns";

export default function RecurringDatePicker() {
  const [nthWeek, setNthWeek] = useState<number>(2);

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [customPattern, setCustomPattern] = useState("");
  const [recurrenceType, setRecurrenceType] = useState("daily");
  const [dayOfWeek, setDayOfWeek] = useState("2"); // default to Tuesday

  const [occurrences, setOccurrences] = useState<number>(5);
  const [dates, setDates] = useState<string[]>([]);

  const [interval, setInterval] = useState<number>(1); // Every X days/weeks/months/years

  const handleGenerate = () => {
    if (!startDate || occurrences <= 0) return;

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    const result: string[] = [];
    let current = start;
    let count = 0;

    while (count < occurrences) {
      if (end && current > end) break;

      result.push(format(current, "yyyy-MM-dd"));

      switch (recurrenceType) {
        case "weekly":
          current = addWeeks(current, interval);
          break;
        case "monthly":
          current = addMonths(current, interval);
          break;

        case "monthly-nth-day":
          // Example: 2nd Tuesday of each month
          const targetMonth = current.getMonth() + interval;
          const nextDate = getNthWeekdayOfMonth(
            current.getFullYear(),
            targetMonth,
            nthWeek || 2,
            parseInt(dayOfWeek || "2", 10) // Convert string to number
          );
          current = nextDate;
          break;

        case "yearly":
          current = new Date(
            current.setFullYear(current.getFullYear() + interval)
          );
          break;
        case "daily":
        default:
          current = addDays(current, interval);
          break;
      }

      count++;
    }

    setDates(result);
  };

  return (
    <div className="space-y-6 max-w-md mx-auto p-4 bg-white shadow rounded-lg">
      {/* Start Date Picker */}
      <div>
        <label className="block text-sm font-medium text-black-700">
          Start Date
        </label>
        <input
          type="date"
          className="w-full p-2 mt-1 border rounded-md"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        {!startDate && (
          <p className="text-red-500 text-sm mt-1">
            Please select a start date.
          </p>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label className="font-medium mb-1">End Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
          className="border p-2 rounded"
          placeholderText="Select end date"
        />
      </div>

      {/* Recurrence Type */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-black-700 mb-1">
          Recurrence Type
        </label>
        <select
          value={recurrenceType}
          onChange={(e) => setRecurrenceType(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Custom Pattern Selector (Optional) */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-black-700 mb-1">
          Pattern
        </label>
        <select
          className="w-full border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={customPattern}
          onChange={(e) => setCustomPattern(e.target.value)}
        >
          <option value="">-- None --</option>
          <option value="second-tuesday">Second Tuesday of every month</option>
        </select>
      </div>

      {/* Monthly Nth-Day Pattern UI */}
      {recurrenceType === "monthly-nth-day" && (
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Select Week
            </label>
            <select
              value={nthWeek}
              onChange={(e) => setNthWeek(parseInt(e.target.value))}
              className="w-full border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={1}>First</option>
              <option value={2}>Second</option>
              <option value={3}>Third</option>
              <option value={4}>Fourth</option>
              <option value={5}>Fifth</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Select Day of Week
            </label>
            <select
              value={dayOfWeek}
              onChange={(e) => setDayOfWeek(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="0">Sunday</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
            </select>
          </div>
        </div>
      )}

      {/* Number of Occurrences */}
      <div>
        <label className="block text-sm font-medium text-black-700">
          Number of Occurrences
        </label>
        <input
          type="number"
          className="w-full p-2 mt-1 border rounded-md"
          value={occurrences}
          min={1}
          onChange={(e) => setOccurrences(parseInt(e.target.value))}
        />
      </div>

      {/* Interval Input */}
      <div>
        <label className="block text-sm font-medium text-black-700 mt-4">
          Repeat Every (Interval)
        </label>
        <input
          type="number"
          className="w-full p-2 mt-1 border rounded-md"
          value={interval}
          min={1}
          onChange={(e) => setInterval(parseInt(e.target.value))}
        />
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
      >
        Generate Dates
      </button>

      {/* Mini Calendar Preview */}
      <div className="pt-4">
        <h3 className="font-semibold mb-2 text-black">
          Mini Calendar Preview:
        </h3>
        <ClientOnlyCalendar highlightedDates={dates} />
      </div>

      {/* Result Preview */}
      {dates.length > 0 && (
        <div className="pt-4">
          <h3 className="font-semibold mb-2 text-black-800">
            Generated Dates:
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-black-700">
            {dates.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
function getNthWeekdayOfMonth(
  year: number,
  month: number,
  nth: number,
  weekday: number
): Date {
  const firstDay = new Date(year, month, 1);
  let count = 0;
  let day = 1;

  while (true) {
    const temp = new Date(year, month, day);
    if (temp.getDay() === weekday) {
      count++;
      if (count === nth) return temp;
    }
    day++;
  }
}
