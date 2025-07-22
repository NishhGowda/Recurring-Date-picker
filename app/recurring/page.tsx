import React from "react";
import RecurringDatePicker from "../../components/RecurringDatePicker";

export default function RecurringPage() {
  return (
    <main className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Recurring Date Picker
        </h1>
        {<RecurringDatePicker />}
      </div>
    </main>
  );
}
