"use client";
import { LogOut, Mail } from "lucide-react";
import React from "react";

import { useState } from "react";

type Job = {
  id: number;
  title: string;
  desc: string;
  location: string;
  type: string;
  description?: string;
  postedAt?: string;
  requirements?: string[];
  salary?: number;
};

export default function JobPage() {
  const [jobs] = useState<Job[]>([
    {
      id: 1,
      title: "Frontend Developer",
      desc: "React/Next.js developer required with Tailwind CSS experience.",
      location: "Karachi, PK",
      type: "Full-Time",
      description: "We are looking for a skilled frontend developer with React/Next.js experience.",
      postedAt: "2025-09-28",
      requirements: [
        "2+ years experience with React/Next.js",
        "Strong knowledge of JavaScript & Tailwind CSS",
        "Experience with REST APIs"
      ],
      salary: 1200
    },
    {
      id: 2,
      title: "Backend Developer",
      desc: "Node.js + Prisma developer needed for API development.",
      location: "Lahore, PK",
      type: "Contract",
      description: "Strong backend developer needed with Node.js and Prisma.",
      postedAt: "2025-09-20",
      requirements: ["3+ years Node.js", "Prisma + PostgreSQL knowledge"],
      salary: 1500
    },
  ]);

  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const [appName, setAppName] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const [appMessage, setAppMessage] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setCvFile(file);
  };

  const handleSubmit = (e: React.FormEvent, job: Job) => {
    e.preventDefault();
    console.log("Applying for:", job);
    console.log({ appName, appEmail, appMessage, cvFile });
    alert(`Application submitted for ${job.title}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Job Openings</h1>

        <section className="grid gap-6">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-5"
            >

              {/* Job Summary */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    {job.title}
                  </h2>

                  <p className="text-gray-700 mt-2 text-sm">{job.desc}</p>
                  <div className="mt-2 text-xs text-gray-500">
                    <span className="mr-3">📍 {job.location}</span>
                    <span>🕒 {job.type}</span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    setExpandedJob(expandedJob === job.id ? null : job.id)
                  }
                  className="mt-4 sm:mt-0 px-5 py-2 rounded-lg text-white font-medium 
             bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
             hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 
             shadow-md transition"
                >
                  {expandedJob === job.id ? "Close" : "View & Apply"}
                </button>

              </div>

              {/* Expanded View */}
              {expandedJob === job.id && (
                <div className="mt-6 border-t pt-6 space-y-5">
                  {/* Job Details */}
                  <div>
                    <h4 className="font-semibold">Description</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {job.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Requirements</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                      {job.requirements?.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Salary</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {job.salary ? `$${job.salary}/month` : "Not specified"}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Posted on</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {job.postedAt
                        ? new Date(job.postedAt).toLocaleDateString()
                        : "Invalid date"}
                    </p>
                  </div>

                  {/* Apply Form */}
                  <form
                    onSubmit={(e) => handleSubmit(e, job)}
                    className="space-y-4"
                  >
                    <h4 className="font-semibold">Apply Now</h4>

                    <div>
                      <label className="block text-sm font-medium">
                        Full name
                      </label>
                      <input
                        required
                        value={appName}
                        onChange={(e) => setAppName(e.target.value)}
                        className="mt-1 w-full border rounded-lg px-3 py-2"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium">Email</label>
                      <input
                        type="email"
                        required
                        value={appEmail}
                        onChange={(e) => setAppEmail(e.target.value)}
                        className="mt-1 w-full border rounded-lg px-3 py-2"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium">
                        Message / Cover letter
                      </label>
                      <textarea
                        value={appMessage}
                        onChange={(e) => setAppMessage(e.target.value)}
                        rows={3}
                        className="mt-1 w-full border rounded-lg px-3 py-2"
                        placeholder="Why are you a good fit?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium">
                        Upload CV
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleCvChange}
                        className="mt-1"
                      />
                      {cvFile && (
                        <p className="mt-2 text-xs text-gray-600">
                          Selected:{" "}
                          <span className="font-medium">{cvFile.name}</span>
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="px-5 py-2 rounded-lg text-white font-medium 
             bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 
             hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 
             shadow-md transition"
                    >
                      Submit Application
                    </button>

                  </form>
                </div>
              )}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}