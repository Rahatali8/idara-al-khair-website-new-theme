"use client";

import { useState } from "react";
import {
  LogOut,
  RefreshCw,
  Mail,
  Briefcase,
  FileText,
  User,
  Star,
} from "lucide-react";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("emails");

  // Job form state
  const [jobTitle, setJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("Full-Time");
  const [jobSubmitting, setJobSubmitting] = useState(false);

  // Flexible fields
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [employmentLevel, setEmploymentLevel] = useState("");
  const [deadlineAt, setDeadlineAt] = useState("");
  const [requirements, setRequirements] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [qualifications, setQualifications] = useState("");
  

  // Dummy data
  const [teachers] = useState([
    { id: 1, name: "Ali Khan", subject: "Mathematics", email: "ali@school.com" },
    { id: 2, name: "Sara Ahmed", subject: "English", email: "sara@school.com" },
  ]);

  const [reviews] = useState([
    { id: 1, teacher: "Ali Khan", review: "Great teacher! Explains very well." },
    { id: 2, teacher: "Sara Ahmed", review: "Very supportive and kind." },
  ]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const loginRes = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const loginData = await loginRes.json();
      if (!loginRes.ok) {
        setError(loginData?.error || "Unauthorized");
        setLoggedIn(false);
        return;
      }

      const res = await fetch("/api/admin/messages", { method: "GET" });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Unauthorized");
        setLoggedIn(false);
      } else {
        setMessages(data.messages || []);
        setLoggedIn(true);
      }
    } catch (err: any) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  const reload = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/messages");
      const data = await res.json();

      if (!res.ok) setError(data?.error || "Failed to fetch");
      else setMessages(data.messages || []);
    } catch (err: any) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  const handleAddJob = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setJobSubmitting(true);
    try {
      const typeMap: Record<string, string> = {
        "Full-Time": "FULL_TIME",
        "Part-Time": "PART_TIME",
        "Internship": "INTERNSHIP",
        "Contract": "CONTRACT",
      };

      

      const payload = {
        title: jobTitle,
        description: jobDesc,
        location: jobLocation,
        jobType: typeMap[jobType] || "FULL_TIME",
        category: category || undefined,
        department: department || undefined,
        employmentLevel: employmentLevel || undefined,
        deadlineAt: deadlineAt || undefined,
        requirements: requirements || undefined,
        responsibilities: responsibilities || undefined,
        qualifications: qualifications || undefined,
      };

      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Failed to create job");
        return;
      }
      // Reset form
      setJobTitle("");
      setJobDesc("");
      setJobLocation("");
      setJobType("Full-Time");
      setCategory("");
      setDepartment("");
      setEmploymentLevel("");
      setDeadlineAt("");
      setRequirements("");
      setResponsibilities("");
      setQualifications("");
      alert("✅ Job created successfully");
    } catch (err: any) {
      setError(String(err));
    } finally {
      setJobSubmitting(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      setLoggedIn(false);
      setMessages([]);
      setPassword("");
      setEmail("");
    }
  };

  // --------- Sidebar Layout -----------
  if (loggedIn) {
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg flex flex-col">
          <h1 className="text-xl font-bold text-center py-4 border-b">
            Admin Panel
          </h1>
          <nav className="flex-1">
            <ul className="space-y-2 p-4">
              <li>
                <button
                  onClick={() => setActiveTab("emails")}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${activeTab === "emails"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                    }`}
                >
                  <Mail className="w-4 h-4" /> Contact Messages
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("addjob")}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${activeTab === "addjob"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                    }`}
                >
                  <Briefcase className="w-4 h-4" /> Add Job
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("jobpost")}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${activeTab === "jobpost"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                    }`}
                >
                  <Briefcase className="w-4 h-4" /> Job Post
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("jobresponse")}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${activeTab === "jobresponse"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                    }`}
                >
                  <FileText className="w-4 h-4" /> Job Response
                </button>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t flex justify-between items-center">
            <button
              onClick={reload}
              disabled={loading}
              className="text-xs text-indigo-600 hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              {loading ? "Loading..." : "Reload"}
            </button>
            <button
              onClick={handleLogout}
              className="text-xs text-red-600 hover:underline flex items-center gap-1"
            >
              <LogOut className="w-3 h-3" /> Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Emails */}
          {activeTab === "emails" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">📧 Contact Messages</h2>
              {messages.length === 0 ? (
                <p className="text-gray-500 italic">No messages found.</p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {messages.map((m) => (
                    <div
                      key={m.filename}
                      className="bg-white border shadow rounded-xl p-4"
                    >
                      <h3 className="font-bold">{m.name}</h3>
                      <p className="text-sm text-indigo-600">{m.email}</p>
                      <p className="text-xs text-gray-500">{m.phone}</p>
                      <div className="mt-2 text-gray-700 text-sm">
                        {m.message}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Add Job */}
          {activeTab === "addjob" && (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
              <div className="w-full max-w-3xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <span className="text-indigo-600">➕</span> Add New Job
                </h2>

                <form
                  onSubmit={handleAddJob}
                  className="bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-xl space-y-6 border border-gray-200 hover:shadow-2xl transition-shadow"
                >
                  {/* Job Title */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      required
                      placeholder="Enter job title"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      value={jobDesc}
                      onChange={(e) => setJobDesc(e.target.value)}
                      required
                      rows={4}
                      placeholder="Write job description..."
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={jobLocation}
                      onChange={(e) => setJobLocation(e.target.value)}
                      required
                      placeholder="Enter job location"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    />
                  </div>

                  {/* Job Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Job Type
                    </label>
                    <select
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    >
                      <option>Full-Time</option>
                      <option>Part-Time</option>
                      <option>Internship</option>
                      <option>Contract</option>
                    </select>
                  </div>

                  {/* Flexible Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                      <input value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
                      <input value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Employment Level</label>
                      <input value={employmentLevel} onChange={(e) => setEmploymentLevel(e.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Deadline</label>
                      <input type="date" value={deadlineAt} onChange={(e) => setDeadlineAt(e.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Requirements</label>
                    <textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} rows={3} className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Responsibilities</label>
                    <textarea value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} rows={3} className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Qualifications</label>
                    <textarea value={qualifications} onChange={(e) => setQualifications(e.target.value)} rows={3} className="w-full rounded-xl border border-gray-300 px-4 py-3" />
                  </div>
                  

                  

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={jobSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md hover:from-indigo-700 hover:to-indigo-800 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60"
                  >
                    {jobSubmitting ? "Creating..." : "➕ Add Job"}
                  </button>
                </form>
              </div>
            </div>

          )}

          {/* Job Posts */}
          {activeTab === "jobpost" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">💼 Job Posts</h2>
              <p>Yahan job posts ka data show hoga (API se ya static).</p>
            </div>
          )}

          {/* Job Responses */}
          {activeTab === "jobresponse" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">📝 Job Responses</h2>
              <p>Yahan job responses ka data show hoga.</p>
            </div>
          )}
        </main>
      </div>
    );
  }

  // --------- Login Page (Default) -----------
  return (
  <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50 flex items-center justify-center p-6">
    <form
      onSubmit={handleLogin}
      className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl px-8 py-10 w-full max-w-md border border-gray-200/60"
    >
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-extrabold text-gray-800">🔑 Admin Login</h2>
        <p className="text-gray-500 text-sm mt-1">Secure access to admin panel</p>
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Admin Email
        </label>
        <input
          type="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition shadow-sm"
        />
      </div>

      {/* Password Input */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Admin Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition shadow-sm"
        />
      </div>

      {/* Button */}
      <button
        disabled={loading}
        className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium py-3 rounded-xl shadow-md hover:from-indigo-700 hover:to-indigo-800 transition-all disabled:opacity-70"
      >
        {loading ? "🔄 Checking..." : "🚀 Login"}
      </button>

      {/* Error Message */}
      {error && (
        <p className="text-red-600 text-sm mt-4 text-center font-medium">{error}</p>
      )}
    </form>
  </main>
);

}
