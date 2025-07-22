# 📅 Recurring Date Picker

A modern, customizable **Recurring Date Picker** built using **Next.js 15**, **Tailwind CSS**, and **React Calendar**. Ideal for scheduling tasks, events, or reminders with repeat patterns like daily, weekly, monthly, or yearly recurrence.

---

## 🔗 Live Demo

👉 [Try the Recurring Date Picker](https://recurring-date-picker-qe99.vercel.app/)
---

## ✨ Features

- 🔁 Select daily, weekly, monthly, or yearly recurrence
- 📅 Mini calendar preview
- 📆 Select specific weekdays and custom intervals
- 📱 Fully responsive and mobile-friendly
- 🎨 Tailwind-powered clean UI
- ⚡ Built with the latest Next.js App Router

---

## 🧱 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Calendar:** [React Calendar](https://www.npmjs.com/package/react-calendar)
- **Date Utilities:** [date-fns](https://date-fns.org/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure
recurring-picker/
├── app/
│   ├── layout.tsx                 # Root layout for the app
│   ├── page.tsx                   # Homepage
│   └── recurring/
│       └── page.tsx               # Recurring Date Picker page
├── components/
│   └── RecurringDatePicker.tsx   # Main date picker component
├── public/                        # Static assets (images, icons)
├── styles/                        # (Optional) Global CSS if needed
├── tailwind.config.ts            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
├── package.json                  # Project metadata and dependencies
└── README.md                     # Project overview and instructions

---

## 🚀 Getting Started Locally

Clone the repository and run the app locally:

```bash
# Clone the repo
git clone https://github.com/your-username/recurring-date-picker.git

# Navigate into the project
cd recurring-date-picker

# Install dependencies
pnpm install

# Run the dev server
pnpm dev

🧑‍💻 Author
Built with 💙 by Nishchitha Gowda
Feel free to connect and check out more projects!

🌍 Deployment
This project is deployed and hosted using Vercel.
To deploy your own version:

Push the code to a GitHub repo

Connect the repo to Vercel

Set build command as pnpm build and output as .next
