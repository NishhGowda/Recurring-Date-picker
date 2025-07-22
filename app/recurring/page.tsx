"use client";

import React from "react";
import RecurringDatePicker from "@/components/RecurringDatePicker";

export default function RecurringPickerPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Recurring Date Picker
      </h1>
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-xl">
        <RecurringDatePicker />
      </div>
    </div>
  );
}
