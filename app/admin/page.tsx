"use client";

import { useState, useEffect } from "react";
import {
  LogOut,
  RefreshCw,
  Mail,
  Briefcase,
  FileText,
  Archive,
  Clock,
  Calendar,
  CheckCircle,
  Users,
} from "lucide-react";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("emails");
  const [jobs, setJobs] = useState<any[]>([]);
  const [jobResponses, setJobResponses] = useState<any[]>([]);
  const [responsesLoading, setResponsesLoading] = useState(false);

  // Naye states for interview and hired candidates
  const [interviewCandidates, setInterviewCandidates] = useState<any[]>([]);
  const [hiredCandidates, setHiredCandidates] = useState<any[]>([]);

  // ✅ YEH NAYA STATE ADD KAREIN - Candidates ke liye
  const [candidates, setCandidates] = useState<any[]>([]);

  // ✅ Manual Add Candidate Form ke liye states
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    name: '',
    email: '',
    position: '',
    phone: '',
    experience: '',
    education: ''
  });

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

  const typeMap: Record<string, string> = {
    "Full-Time": "FULL_TIME",
    "Part-Time": "PART_TIME",
    "Internship": "INTERNSHIP",
    "Contract": "CONTRACT",
  };

  // ✅ EK HI loadJobs FUNCTION
  const loadJobs = async () => {
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Failed to load jobs");
        return;
      }
      setJobs(data.jobs || []);
    } catch (err: any) {
      setError(String(err));
    }
  };

  // ✅ Use effect to load jobs on component mount
  useEffect(() => {
    if (loggedIn) {
      loadMessages();
      loadJobs();
      loadInterviewCandidates();
      loadHiredCandidates();
      loadCandidates(); // ✅ YEH ADD KAREIN - Candidates bhi load ho jayein
    }
  }, [loggedIn]);

  // ✅ YEH UPDATED FUNCTION USE KARO
  const loadMessages = async () => {
    try {
      const res = await fetch("/api/admin/messages", {
        method: "GET",
        credentials: "include"
      });
      const data = await res.json();

      if (res.ok) {
        setMessages(data.messages || data || []); // ✅ YEH LINE THODI CHANGE KARO
      } else {
        console.error('Failed to load messages:', data.error);
        setMessages([]); // ✅ Empty array set karo
      }
    } catch (err: any) {
      console.error('Error loading messages:', err);
      setMessages([]); // ✅ Error mein bhi empty array
    }
  };
  // ✅ YEH NAYA FUNCTION - Candidates load karne ke liye
  const loadCandidates = async () => {
    try {
      const response = await fetch('/api/candidates');
      const data = await response.json();
      setCandidates(data.candidates || data || []);
    } catch (error) {
      console.error('Error loading candidates:', error);
      // Agar API nahi hai to empty array set kardo
      setCandidates([]);
    }
  };

  // ✅ YEH NAYA FUNCTION - New candidate manually add karne ke liye
  const handleAddCandidate = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!newCandidate.name || !newCandidate.email || !newCandidate.position) {
      alert('❌ Please fill all required fields (Name, Email, Position)');
      return;
    }

    try {
      const response = await fetch('/api/candidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCandidate),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Candidate added successfully!');
        // Reset form
        setNewCandidate({
          name: '',
          email: '',
          position: '',
          phone: '',
          experience: '',
          education: ''
        });
        setShowAddForm(false);
        loadCandidates(); // Refresh list
      } else {
        alert('❌ Failed to add candidate: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      alert('❌ Error adding candidate');
      console.error('Error:', error);
    }
  };

  // ✅ YEH NAYA FUNCTION - Candidate delete karne ke liye
  const deleteCandidate = async (candidateId: number) => {
    if (!confirm('Are you sure you want to delete this candidate?')) return;

    try {
      const response = await fetch(`/api/candidates?id=${candidateId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Candidate deleted successfully!');
        loadCandidates(); // Refresh list
      } else {
        alert('❌ Failed to delete candidate: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      alert('❌ Error deleting candidate');
      console.error('Error:', error);
    }
  };

  // ✅ YEH NAYA FUNCTION - Interview schedule karne ke liye
  const scheduleInterview = async (candidateId: number, candidateName: string, candidateEmail: string, position: string) => {
    const interviewDate = prompt('Enter interview date (YYYY-MM-DD):');
    if (!interviewDate) return;

    const interviewTime = prompt('Enter interview time (e.g., 02:30 PM):');
    if (!interviewTime) return;

    const confirmed = confirm(`Send interview email to ${candidateName}?\nDate: ${interviewDate}\nTime: ${interviewTime}`);
    if (!confirmed) return;

    try {
      const response = await fetch('/api/send-interview-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          candidateId,
          candidateName,
          candidateEmail,
          interviewDate,
          interviewTime,
          position
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Interview email sent successfully!');
        loadCandidates(); // Refresh candidates list
      } else {
        alert('❌ Failed to send email: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      alert('❌ Error sending interview email');
      console.error('Error:', error);
    }
  };

  // ✅ Filter jobs by age
  const getRecentJobs = () => {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    return jobs.filter(job => {
      const jobDate = new Date(job.createdAt);
      return jobDate >= twoDaysAgo;
    });
  };

  const getOldJobs = () => {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    return jobs.filter(job => {
      const jobDate = new Date(job.createdAt);
      return jobDate < twoDaysAgo;
    });
  };

  // ✅ Load job responses function
  const loadJobResponses = async () => {
    setResponsesLoading(true);
    setError(null);
    try {
      console.log('Loading job responses...');

      const res = await fetch("/api/admin/job-responses", {
        credentials: 'include'
      });

      const data = await res.json();
      console.log('Job responses API response:', data);

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error('Please login as admin first');
        }
        throw new Error(data?.error || `HTTP error! status: ${res.status}`);
      }

      setJobResponses(data.applications || []);

      if (data.applications && data.applications.length === 0) {
        console.log('No applications found in response');
      }

    } catch (err: any) {
      console.error('Error loading job responses:', err);
      setError(`Failed to load job responses: ${err.message}`);
      setJobResponses([]);
    } finally {
      setResponsesLoading(false);
    }
  };

  // ✅ Load interview candidates
  const loadInterviewCandidates = async () => {
    try {
      const res = await fetch("/api/admin/interview-candidates");
      const data = await res.json();
      if (res.ok) {
        setInterviewCandidates(data.candidates || []);
      }
    } catch (err) {
      console.error('Error loading interview candidates:', err);
    }
  };

  // ✅ Load hired candidates
  const loadHiredCandidates = async () => {
    try {
      const res = await fetch("/api/admin/hired-candidates");
      const data = await res.json();
      if (res.ok) {
        setHiredCandidates(data.candidates || []);
      }
    } catch (err) {
      console.error('Error loading hired candidates:', err);
    }
  };

  // ✅ UPDATED - Mark for interview function with automatic email
  const markForInterview = async (application: any) => {
    // Pre-filled email content
    const defaultEmail = `
Dear ${application.applicantName},

Thank you for your interest in the ${application.job?.title} position at Idara Al-Khair.

We would like to invite you for an interview. Please confirm your availability for the proposed date and time.

Best regards,
HR Team
Idara Al-Khair
    `.trim();

    // Create dialog box with email preview
    const interviewDate = prompt('Enter interview date (YYYY-MM-DD):\n\nEmail Preview:\n' + defaultEmail);
    if (!interviewDate) return;

    const interviewTime = prompt('Enter interview time (e.g., 02:30 PM):');
    if (!interviewTime) return;

    const confirmed = confirm(`Send interview invitation to ${application.applicantName}?\n\nDate: ${interviewDate}\nTime: ${interviewTime}\n\nEmail will be sent automatically.`);
    if (!confirmed) return;

    try {
      // 1. Pehle candidate ko interview ke liye mark karein
      const markRes = await fetch("/api/admin/mark-interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicationId: application.id,
          candidateName: application.applicantName,
          candidateEmail: application.applicantEmail,
          jobTitle: application.job?.title,
          jobId: application.jobId,
          interviewDate: interviewDate,
          interviewTime: interviewTime
        })
      });

      const markData = await markRes.json();

      if (!markRes.ok) {
        alert(`❌ ${markData.error}`);
        return;
      }

      // 2. Phir automatically email bhejein
      const emailRes = await fetch('/api/send-interview-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          candidateId: application.id,
          candidateName: application.applicantName,
          candidateEmail: application.applicantEmail,
          interviewDate: interviewDate,
          interviewTime: interviewTime,
          position: application.job?.title
        }),
      });

      const emailResult = await emailRes.json();

      if (emailResult.success) {
        alert('✅ Candidate marked for interview and email sent successfully!');
        loadInterviewCandidates();
        loadJobResponses();
      } else {
        alert('✅ Candidate marked for interview but email failed: ' + (emailResult.error || 'Unknown error'));
        loadInterviewCandidates();
        loadJobResponses();
      }
    } catch (err) {
      console.error('Interview error:', err);
      alert('❌ Failed to process interview request');
    }
  };

  // ✅ SIRF EK BAAR - Mark as hired function
  const markAsHired = async (candidate: any) => {
    try {
      const res = await fetch("/api/admin/mark-hired", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidateId: candidate.id,
          candidateName: candidate.applicantName || candidate.candidateName,
          candidateEmail: candidate.applicantEmail || candidate.candidateEmail,
          jobTitle: candidate.job?.title || candidate.jobTitle,
          jobId: candidate.jobId,
          applicationId: candidate.applicationId || candidate.id
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Candidate marked as hired!');
        loadHiredCandidates();
        loadInterviewCandidates();
        loadJobResponses();
      } else {
        alert(`❌ ${data.error}`);
      }
    } catch (err) {
      console.error('Hired error:', err);
      alert('❌ Failed to mark as hired');
    }
  };

  // SINGLE handleLogin function
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const loginRes = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const loginData = await loginRes.json();
      if (!loginRes.ok) {
        setError(loginData?.error || "Unauthorized");
        setLoggedIn(false);
        return;
      }

      // Login successful
      setLoggedIn(true);

      // Messages load karein
      const messagesRes = await fetch("/api/admin/messages", {
        method: "GET",
        credentials: "include"
      });
      const messagesData = await messagesRes.json();
      if (messagesRes.ok) {
        setMessages(messagesData.messages || []);
      }

      // Job responses load karein
      await loadJobResponses();

      // Jobs load karein
      await loadJobs();

      // Interview & hired candidates load karein
      await loadInterviewCandidates();
      await loadHiredCandidates();

      // Candidates load karein
      await loadCandidates();

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
      await loadJobs();
      setActiveTab("recentjobs");
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
                  onClick={() => setActiveTab("recentjobs")}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${activeTab === "recentjobs"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                    }`}
                >
                  <Clock className="w-4 h-4" /> Recent Jobs
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("oldjobs")}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${activeTab === "oldjobs"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                    }`}
                >
                  <Archive className="w-4 h-4" /> Old Jobs
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
                  <FileText className="w-4 h-4" /> Job Responses
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("candidates")}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${activeTab === "candidates"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                    }`}
                >
                  <Users className="w-4 h-4" /> Candidates
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("interview")}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${activeTab === "interview"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                    }`}
                >
                  <Calendar className="w-4 h-4" /> Interview
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("hired")}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${activeTab === "hired"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                    }`}
                >
                  <CheckCircle className="w-4 h-4" /> Hired
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
                  {messages.map((m, index) => (
                    <div
                      key={m.id || m.filename || `message-${index}`}
                      className="bg-white border shadow rounded-xl p-4"
                    >
                      <h3 className="font-bold">{m.name}</h3>
                      <p className="text-sm text-indigo-600">{m.email}</p>
                      <p className="text-xs text-gray-500">{m.phone}</p>
                      <div className="mt-2 text-gray-700 text-sm">
                        {m.message}
                      </div>
                      {m.preferredDate && (
                        <p className="text-xs text-green-600 mt-1">
                          Preferred Date: {m.preferredDate}
                        </p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">
                        Received: {new Date(m.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Add Job */}
          {activeTab === "addjob" && (
            <div className="flex justify-center items-start bg-gradient-to-br from-gray-50 to-gray-100 p-4 py-6">
              <div className="w-full max-w-6xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <span className="text-lightblue">➕</span> Add New Job
                </h2>

                <form
                  onSubmit={handleAddJob}
                  className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl space-y-4 border border-gray-200 hover:shadow-2xl transition-shadow"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Job Title</label>
                      <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required placeholder="Enter job title" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                      <input type="text" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} required placeholder="Enter job location" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                      <textarea value={jobDesc} onChange={(e) => setJobDesc(e.target.value)} required rows={3} placeholder="Write job description..." className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-5 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Job Type</label>
                      <select value={jobType} onChange={(e) => setJobType(e.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition">
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                        <option>Internship</option>
                        <option>Contract</option>
                      </select>
                    </div>
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

                  <div className="grid md:grid-cols-3 gap-4">
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
                  </div>

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

          {/* Recent Jobs (2 din ke andar wali) */}
          {activeTab === "recentjobs" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Recent Jobs (Last 2 Days)
                </h2>
                <button
                  onClick={loadJobs}
                  className="px-3 py-1.5 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh Jobs
                </button>
              </div>

              {getRecentJobs().length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border">
                  <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No recent jobs found</p>
                  <p className="text-gray-400 text-sm">Jobs from the last 2 days will appear here</p>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {getRecentJobs().map((job) => (
                    <div key={job.id} className="bg-white border rounded-xl p-4 shadow hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-gray-800">{job.title}</h3>
                      <div className="text-xs text-gray-500 mt-1">
                        <span className="mr-3">📍 {job.location}</span>
                        <span>🕒 {job.jobType?.replace("_", " ")}</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-2 line-clamp-3">{job.description}</p>
                      <div className="text-[11px] text-green-600 mt-3 font-medium">
                        🆕 Posted {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : ""}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Old Jobs (2 din se purani) */}
          {activeTab === "oldjobs" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <Archive className="w-6 h-6" />
                  Old Jobs (Archive)
                </h2>
                <button
                  onClick={loadJobs}
                  className="px-3 py-1.5 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh Jobs
                </button>
              </div>

              {getOldJobs().length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border">
                  <Archive className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No old jobs found</p>
                  <p className="text-gray-400 text-sm">Jobs older than 2 days will appear here</p>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {getOldJobs().map((job) => (
                    <div key={job.id} className="bg-white border rounded-xl p-4 shadow hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-gray-800">{job.title}</h3>
                      <div className="text-xs text-gray-500 mt-1">
                        <span className="mr-3">📍 {job.location}</span>
                        <span>🕒 {job.jobType?.replace("_", " ")}</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-2 line-clamp-3">{job.description}</p>
                      <div className="text-[11px] text-gray-500 mt-3">
                        📅 Posted {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : ""}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Job Responses */}
          {activeTab === "jobresponse" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Job Applications ({jobResponses.length})
                </h2>
                <button
                  onClick={loadJobResponses}
                  disabled={responsesLoading}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-60 flex items-center gap-2"
                >
                  <RefreshCw className={`w-4 h-4 ${responsesLoading ? 'animate-spin' : ''}`} />
                  {responsesLoading ? "Loading..." : "Refresh"}
                </button>
              </div>

              {jobResponses.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No job applications yet</p>
                  <p className="text-gray-400 text-sm">Applications will appear here when candidates apply to your jobs</p>
                  <button
                    onClick={loadJobResponses}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Check for Applications
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {jobResponses.map((application) => (
                    <div key={application.id} className="bg-white border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl text-gray-800">{application.applicantName}</h3>
                          <p className="text-indigo-600 text-lg">{application.applicantEmail}</p>
                          {application.applicantPhone && (
                            <p className="text-gray-600 mt-1">📞 {application.applicantPhone}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            New
                          </span>
                          <p className="text-gray-500 text-sm mt-1">
                            {new Date(application.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-semibold text-gray-700">Applied For:</p>
                          <p className="text-gray-800 text-lg">{application.job?.title || "N/A"}</p>
                        </div>

                        <div>
                          <p className="font-semibold text-gray-700">Candidate Details:</p>
                          <div className="space-y-1 text-sm">
                            {application.yearsOfExperience && (
                              <p>💼 {application.yearsOfExperience} years experience</p>
                            )}
                            {application.highestEducation && (
                              <p>🎓 {application.highestEducation}</p>
                            )}
                            {application.city && (
                              <p>📍 {application.city}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {application.coverLetter && (
                        <div className="mb-4">
                          <p className="font-semibold text-gray-700 mb-2">Cover Letter:</p>
                          <div className="bg-gray-50 p-4 rounded-lg border">
                            <p className="text-gray-700 whitespace-pre-line">{application.coverLetter}</p>
                          </div>
                        </div>
                      )}

                      {application.resumeUrl && (
                        <div className="flex items-center gap-4 mb-4">
                          <p className="font-semibold text-gray-700">Resume:</p>
                          <a
                            href={application.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2 px-4 py-2 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                          >
                            <FileText className="w-4 h-4" />
                            View Resume
                          </a>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-4">
                        <button
                          onClick={() => markForInterview(application)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                        >
                          <Calendar className="w-4 h-4" />
                          Mark for Interview
                        </button>

                        <button
                          onClick={() => markAsHired(application)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Mark as Hired
                        </button>
                      </div>

                      <div className="border-t pt-4 mt-4 flex justify-between items-center text-sm text-gray-500">
                        <span>Application ID: {application.id}</span>
                        <span>Job ID: {application.jobId}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Candidates Tab - UPDATED WITH MANUAL ADD FEATURE */}
          {activeTab === "candidates" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Candidates ({candidates.length})
                </h2>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
                  >
                    {showAddForm ? '❌ Cancel' : '➕ Add New Candidate'}
                  </button>
                  <button
                    onClick={loadCandidates}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                  </button>
                </div>
              </div>

              {/* ✅ Add Candidate Form */}
              {showAddForm && (
                <div className="bg-white p-6 rounded-xl border border-green-200 mb-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 text-green-800 flex items-center gap-2">
                    ➕ Add New Candidate
                  </h3>
                  <form onSubmit={handleAddCandidate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={newCandidate.name}
                        onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="Enter candidate name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={newCandidate.email}
                        onChange={(e) => setNewCandidate({ ...newCandidate, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position *</label>
                      <input
                        type="text"
                        required
                        value={newCandidate.position}
                        onChange={(e) => setNewCandidate({ ...newCandidate, position: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="Enter job position"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={newCandidate.phone}
                        onChange={(e) => setNewCandidate({ ...newCandidate, phone: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                      <input
                        type="text"
                        value={newCandidate.experience}
                        onChange={(e) => setNewCandidate({ ...newCandidate, experience: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="e.g., 3 years in web development"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                      <input
                        type="text"
                        value={newCandidate.education}
                        onChange={(e) => setNewCandidate({ ...newCandidate, education: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="e.g., Bachelors in Computer Science"
                      />
                    </div>
                    <div className="md:col-span-2 flex gap-3 pt-2">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 transition-colors"
                      >
                        💾 Save Candidate
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowAddForm(false);
                          setNewCandidate({
                            name: '', email: '', position: '', phone: '', experience: '', education: ''
                          });
                        }}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {candidates.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No candidates found</p>
                  <p className="text-gray-400 text-sm mb-4">Add candidates manually using the button above</p>
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 mx-auto"
                  >
                    ➕ Add First Candidate
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-xl border overflow-hidden shadow-lg">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {candidates.map(candidate => (
                        <tr key={candidate.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{candidate.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{candidate.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.position}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {candidate.phone || <span className="text-gray-400">N/A</span>}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${candidate.status === 'INTERVIEW_SCHEDULED'
                                ? 'bg-blue-100 text-blue-800'
                                : candidate.status === 'HIRED'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                              {candidate.status || 'PENDING'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                            <button
                              onClick={() => scheduleInterview(
                                candidate.id,
                                candidate.name,
                                candidate.email,
                                candidate.position
                              )}
                              className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 flex items-center gap-1 text-xs transition-colors"
                            >
                              📅 Interview
                            </button>
                            <button
                              onClick={() => markAsHired(candidate)}
                              className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 flex items-center gap-1 text-xs transition-colors"
                            >
                              ✅ Hire
                            </button>
                            <button
                              onClick={() => deleteCandidate(candidate.id)}
                              className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 flex items-center gap-1 text-xs transition-colors"
                            >
                              🗑️ Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Interview Candidates */}
          {activeTab === "interview" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Interview Candidates ({interviewCandidates.length})
                </h2>
                <button
                  onClick={loadInterviewCandidates}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
              </div>

              {interviewCandidates.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No interview candidates</p>
                  <p className="text-gray-400 text-sm">Candidates marked for interview will appear here</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {interviewCandidates.map((candidate) => (
                    <div key={candidate.id} className="bg-white border rounded-xl p-6 shadow-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl text-gray-800">{candidate.candidateName}</h3>
                          <p className="text-indigo-600 text-lg">{candidate.candidateEmail}</p>
                          <p className="text-gray-600 mt-1">📋 {candidate.jobTitle}</p>

                          {/* ✅ Interview Date/Time Display */}
                          {(candidate.interviewDate || candidate.interviewTime) && (
                            <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-blue-800 font-semibold">📅 Interview Scheduled</p>
                              {candidate.interviewDate && (
                                <p className="text-blue-700">Date: {candidate.interviewDate}</p>
                              )}
                              {candidate.interviewTime && (
                                <p className="text-blue-700">Time: {candidate.interviewTime}</p>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            Interview
                          </span>
                          <p className="text-gray-500 text-sm mt-1">
                            {new Date(candidate.markedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => markAsHired(candidate)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Mark as Hired
                        </button>

                        {/* ✅ Reschedule Interview Button */}
                        <button
                          onClick={() => markForInterview({
                            id: candidate.applicationId,
                            applicantName: candidate.candidateName,
                            applicantEmail: candidate.candidateEmail,
                            job: { title: candidate.jobTitle }
                          })}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                        >
                          <Calendar className="w-4 h-4" />
                          Reschedule
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Hired Candidates */}
          {activeTab === "hired" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Hired Candidates ({hiredCandidates.length})
                </h2>
                <button
                  onClick={loadHiredCandidates}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
              </div>

              {hiredCandidates.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border">
                  <CheckCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No hired candidates yet</p>
                  <p className="text-gray-400 text-sm">Successfully hired candidates will appear here</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  {hiredCandidates.map((candidate) => (
                    <div key={candidate.id} className="bg-white border rounded-xl p-6 shadow-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl text-gray-800">{candidate.candidateName}</h3>
                          <p className="text-indigo-600 text-lg">{candidate.candidateEmail}</p>
                          <p className="text-gray-600 mt-1">🎯 {candidate.jobTitle}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Hired
                          </span>
                          <p className="text-gray-500 text-sm mt-1">
                            {new Date(candidate.hiredAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-green-800 font-semibold">✅ Successfully Employed</p>
                        <p className="text-green-700 text-sm mt-1">This candidate has been hired for the position.</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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