import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
        Recurring Date Picker Demo
      </h1>
      <Link
        href="/recurring-picker"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Test the Component
      </Link>
    </div>
  );
}
