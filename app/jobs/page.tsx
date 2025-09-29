"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Job = {
  id: number;
  title: string;
  description: string;
  location: string;
  jobType: string;
  createdAt?: string;
  requirements?: string;
  responsibilities?: string;
  qualifications?: string;
  deadlineAt?: string;
};

export default function JobPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applyOpen, setApplyOpen] = useState(false);

  // Apply form state
  const [applying, setApplying] = useState(false);
  const [appName, setAppName] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const [appPhone, setAppPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [yearsExp, setYearsExp] = useState<string>("");
  const [highestEducation, setHighestEducation] = useState("");
  const [city, setCity] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        if (!res.ok) {
          setError(data?.error || "Failed to load jobs");
          return;
        }
        setJobs(data.jobs || []);
      } catch (e: any) {
        setError(String(e));
      }
    };
    load();
  }, []);

  const prettyType = (t?: string) => (t ? t.replace("_", " ") : "");

  const openApplyModal = () => {
    if (!selectedJob) return;
    setOpen(false);
    setApplyOpen(true);
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;
    setApplying(true);
    try {
      const res = await fetch(`/api/jobs/${selectedJob.id}/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicantName: appName,
          applicantEmail: appEmail,
          applicantPhone: appPhone || undefined,
          coverLetter: coverLetter || undefined,
          resumeUrl: resumeUrl || undefined,
          yearsOfExperience: yearsExp ? Number(yearsExp) : undefined,
          highestEducation: highestEducation || undefined,
          city: city || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data?.error || "Failed to apply");
        return;
      }
      alert("Application submitted successfully");
      setAppName("");
      setAppEmail("");
      setAppPhone("");
      setCoverLetter("");
      setResumeUrl("");
      setYearsExp("");
      setHighestEducation("");
      setCity("");
      setApplyOpen(false);
    } catch (err: any) {
      alert(String(err));
    } finally {
      setApplying(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/uploads', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) {
        alert(data?.error || 'Upload failed');
        return;
      }
      setResumeUrl(data.url);
    } catch (err: any) {
      alert(String(err));
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Job Openings</h1>

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        {/* Compact list view */}
        <ul className="bg-white rounded-xl border divide-y">
          {jobs.map((job) => (
            <li key={job.id} className="p-4 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">{job.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{job.description}</p>
                <div className="text-xs text-gray-500 mt-2">
                    <span className="mr-3">📍 {job.location}</span>
                  <span>🕒 {prettyType(job.jobType)}</span>
                  {job.createdAt && (
                    <span className="ml-3">📅 {new Date(job.createdAt).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
              <div className="shrink-0">
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setOpen(true);
                  }}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 shadow"
                >
                  View details
                </button>
              </div>
            </li>
                      ))}
                    </ul>
                  </div>

      {/* Details + Apply dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[96vw] sm:max-w-3xl md:max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedJob?.title}</DialogTitle>
            <DialogDescription>
              {selectedJob ? (
                <span className="text-xs text-gray-500">
                  📍 {selectedJob.location} • {prettyType(selectedJob.jobType)}
                  {selectedJob.createdAt && (
                    <> • {new Date(selectedJob.createdAt).toLocaleDateString()}</>
                  )}
                </span>
              ) : null}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
            <section>
              <h4 className="font-semibold text-gray-800">Description</h4>
              <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">
                {selectedJob?.description}
              </p>
            </section>

            {selectedJob?.requirements && (
              <section>
                <h4 className="font-semibold text-gray-800">Requirements</h4>
                <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">{selectedJob.requirements}</p>
              </section>
            )}

            {selectedJob?.responsibilities && (
              <section>
                <h4 className="font-semibold text-gray-800">Responsibilities</h4>
                <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">{selectedJob.responsibilities}</p>
              </section>
            )}

            {selectedJob?.qualifications && (
              <section>
                <h4 className="font-semibold text-gray-800">Qualifications</h4>
                <p className="text-sm text-gray-700 mt-1 whitespace-pre-line">{selectedJob.qualifications}</p>
              </section>
            )}

            {selectedJob?.deadlineAt && (
              <section>
                <h4 className="font-semibold text-gray-800">Deadline</h4>
                <p className="text-sm text-gray-700 mt-1">{new Date(selectedJob.deadlineAt).toLocaleDateString()}</p>
              </section>
            )}

            <DialogFooter>
              <button onClick={openApplyModal} className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700">
                Apply Now
                    </button>
            </DialogFooter>
                </div>
        </DialogContent>
      </Dialog>

      {/* Apply Modal */}
      <Dialog open={applyOpen} onOpenChange={setApplyOpen}>
        <DialogContent className="w-[96vw] sm:max-w-3xl md:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Apply for this job</DialogTitle>
            <DialogDescription>
              Please fill the form below. Job info is prefilled.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleApplySubmit} className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
            <div>
              <label className="block text-xs font-medium text-gray-700">Job Title</label>
              <input value={selectedJob?.title || ""} readOnly className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">Job Description</label>
              <textarea value={selectedJob?.description || ""} readOnly rows={3} className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-50" />
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700">Full name</label>
                <input required value={appName} onChange={(e) => setAppName(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700">Email</label>
                <input type="email" required value={appEmail} onChange={(e) => setAppEmail(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700">Phone (optional)</label>
                <input value={appPhone} onChange={(e) => setAppPhone(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="03xx-xxxxxxx" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700">City</label>
                <input value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Your city" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700">Resume (PDF/DOC/DOCX)</label>
                <div className="mt-1 flex items-center gap-2">
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
                  {uploading && <span className="text-xs text-gray-500">Uploading...</span>}
                </div>
                {resumeUrl && (
                  <p className="text-xs text-green-600 mt-1">Uploaded: {resumeUrl}</p>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700">Years of Experience</label>
                <input type="number" min={0} value={yearsExp} onChange={(e) => setYearsExp(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="e.g., 3" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700">Highest Education</label>
                <input value={highestEducation} onChange={(e) => setHighestEducation(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="BSc/BS/Intermediate" />
              </div>
            </div>

              
              <div>
                <label className="block text-xs font-medium text-gray-700">Cover letter</label>
                <textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} rows={3} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Why are you a good fit?" />
              </div>

            <DialogFooter>
              <button type="submit" disabled={applying} className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-60">
                {applying ? "Submitting..." : "Submit Application"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}