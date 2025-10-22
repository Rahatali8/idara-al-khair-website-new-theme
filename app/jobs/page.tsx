"use client";

import React, { useEffect, useState, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AutoCaptcha from "@/components/AutoCaptcha";

// Job type update karein with status field
type Job = {
  id: number;
  title: string;
  description: string;
  location: string;
  jobType: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  requirements?: string;
  responsibilities?: string;
  qualifications?: string;
  deadlineAt?: string;
};

const prettyType = (t?: string) => {
  if (!t) return "";
  return t.toLowerCase().replace('_', ' ');
};

// AutoCaptcha handle type define karo
type AutoCaptchaHandle = {
  getToken: () => string | null;
  reset: () => void;
  isVerified: () => boolean;
};

// ✅ Helper functions (component ke bahar)
const isDeadlinePassed = (job: Job) => {
  if (!job.deadlineAt) return false;
  return new Date(job.deadlineAt) < new Date();
};

const isDeadlineNear = (job: Job) => {
  if (!job.deadlineAt) return false;
  const deadline = new Date(job.deadlineAt);
  const now = new Date();
  const twoDays = 2 * 24 * 60 * 60 * 1000;
  return (deadline.getTime() - now.getTime()) < twoDays;
};

const shouldHideJob = (job: Job) => {
  if (job.status !== "HIRED") return false;
  if (!job.updatedAt) return false;
  
  const hiredTime = new Date(job.updatedAt).getTime();
  const currentTime = new Date().getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  
  return (currentTime - hiredTime) > oneDay;
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

  // AutoCaptcha ref
  const captchaRef = useRef<AutoCaptchaHandle>(null);

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
    
    const isHired = selectedJob.status === "HIRED";
    const isDeadlinePassed = selectedJob.deadlineAt && new Date(selectedJob.deadlineAt) < new Date();
    
    if (isHired) {
      alert(`🚫 Hiring for "${selectedJob.title}" has been completed.\n\nWe are no longer accepting applications for this position.`);
      return;
    }
    
    if (isDeadlinePassed) {
      alert(`🚫 Deadline for "${selectedJob.title}" has passed.\n\nWe are no longer accepting applications.`);
      return;
    }
    
    setOpen(false);
    setApplyOpen(true);
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    const isHired = selectedJob.status === "HIRED";
    const isDeadlinePassed = selectedJob.deadlineAt && new Date(selectedJob.deadlineAt) < new Date();
    
    if (isHired) {
      alert(`🚫 Hiring for "${selectedJob.title}" has been completed.\n\nWe are no longer accepting applications for this position.`);
      return;
    }

    if (isDeadlinePassed) {
      alert(`🚫 Deadline for "${selectedJob.title}" has passed.\n\nWe are no longer accepting applications.`);
      return;
    }

    // AutoCaptcha verification check
    if (!captchaRef.current?.isVerified()) {
      alert("Please complete the CAPTCHA verification");
      return;
    }

    // Get token from AutoCaptcha
    const captchaToken = captchaRef.current?.getToken();

    console.log("Submitting application for job:", selectedJob.id);
    console.log("Captcha token:", captchaToken);

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
          captchaToken: captchaToken,
        }),
      });

      const data = await res.json();
      console.log("Apply API response:", data);

      if (!res.ok) {
        alert(data?.error || "Failed to apply");
        return;
      }

      alert("Application submitted successfully");
      
      // Form reset
      setAppName("");
      setAppEmail("");
      setAppPhone("");
      setCoverLetter("");
      setResumeUrl("");
      setYearsExp("");
      setHighestEducation("");
      setCity("");
      
      // Reset captcha
      captchaRef.current?.reset();
      setApplyOpen(false);
      
    } catch (err: any) {
      console.error("Application error:", err);
      alert("Failed to submit application. Please try again.");
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

  // Reset captcha when modal closes
  const handleApplyModalClose = () => {
    setApplyOpen(false);
    captchaRef.current?.reset();
  };

  return (
    <main className="min-h-screen bg-gray-500 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-darkblue hover:underline decoration-lightblue mb-6">Job Openings</h1>

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        {/* Job list - UPDATED WITH ALL CONDITIONS */}
        <ul className="bg-sky-100 rounded-xl hover:border-2 border-sky-500 divide-y divide-lightblue">
          {jobs.map((job) => {
            const isHired = job.status === "HIRED";
            const isClosed = job.status === "CLOSED";
            const isOpen = job.status === "OPEN";
            
            // ✅ CLOSED jobs kabhi na dikhayein
            if (isClosed) {
              return null;
            }
            
            // ✅ HIRED jobs 1 din bad hide
            if (isHired && shouldHideJob(job)) {
              return null;
            }
            
            // ✅ OPEN jobs deadline cross hone par hide
            if (isOpen && isDeadlinePassed(job)) {
              return null;
            }

            return (
              <li key={job.id} className="p-4 flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold uppercase text-gray-900 truncate">{job.title}</h3>
                    {/* ✅ STATUS BADGES */}
                    {isHired && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full shrink-0">
                        ✅ Hired
                      </span>
                    )}
                    {isOpen && isDeadlineNear(job) && (
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full shrink-0">
                        ⏳ Ending Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{job.description}</p>
                  <div className="text-xs text-gray-500 mt-2">
                    <span className="mr-3">📍{job.location}</span>
                    <span>🕒 {prettyType(job.jobType)}</span>
                    {job.createdAt && (
                      <span className="ml-3">📅 {new Date(job.createdAt).toLocaleDateString()}</span>
                    )}
                    {/* ✅ DEADLINE INFO */}
                    {job.deadlineAt && (
                      <span className={`ml-3 ${isDeadlineNear(job) ? 'text-red-600 font-medium' : 'text-gray-500'}`}>
                        ⏰ {new Date(job.deadlineAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
                <div className="shrink-0">
                  <button
                    onClick={() => {
                      if (isHired) {
                        alert(`🚫 Hiring for "${job.title}" has been completed.\n\nWe are no longer accepting applications for this position.`);
                      } else if (isDeadlinePassed(job)) {
                        alert(`🚫 Deadline for "${job.title}" has passed.\n\nWe are no longer accepting applications.`);
                      } else {
                        setSelectedJob(job);
                        setOpen(true);
                      }
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium shadow ${
                      isHired || isDeadlinePassed(job)
                        ? "bg-gray-400 text-white cursor-not-allowed" 
                        : "bg-darkblue text-white hover:bg-indigo-950"
                    }`}
                    disabled={isHired || isDeadlinePassed(job)}
                  >
                    {isHired ? "Hiring Completed" : 
                     isDeadlinePassed(job) ? "Deadline Passed" : 
                     "View details"}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        {/* ✅ EMPTY STATE AGAR SAB JOBS HIDDEN HAIN */}
        {jobs.filter(job => {
          const isHired = job.status === "HIRED";
          const isClosed = job.status === "CLOSED";
          const isOpen = job.status === "OPEN";
          
          if (isClosed) return false;
          if (isHired && shouldHideJob(job)) return false;
          if (isOpen && isDeadlinePassed(job)) return false;
          
          return true;
        }).length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border">
            <p className="text-gray-500 text-lg mb-2">No job openings at the moment</p>
            <p className="text-gray-400 text-sm">Please check back later for new opportunities</p>
          </div>
        )}
      </div>

      {/* Job details dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[96vw] sm:max-w-3xl md:max-w-4xl border-4 border-darkblue bg-sky-100">
          <DialogHeader>
            <DialogTitle className="flex justify-center gap-2 uppercase text-darkblue">
              {selectedJob?.title}
              {/* ✅ HIRED BADGE IN MODAL */}
              {selectedJob?.status === "HIRED" && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  ✅ Hired
                </span>
              )}
            </DialogTitle>
            <DialogDescription>
              {selectedJob ? (
                <span className="text-xs text-gray-500 flex justify-center gap-2">
                  📍 {selectedJob.location} • {prettyType(selectedJob.jobType)}
                  {selectedJob.createdAt && (
                    <> • {new Date(selectedJob.createdAt).toLocaleDateString()}</>
                  )}
                </span>
              ) : null}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-8 border-t border-darkblue pt-6 space-y-2 max-h-[75vh] overflow-y-auto pr-2">
            {/* ✅ HIRED MESSAGE AGAR JOB HIRED HAI */}
            {selectedJob?.status === "HIRED" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-800 font-semibold text-center text-lg">
                  🚫 Hiring Completed
                </p>
                <p className="text-green-600 text-center mt-1">
                  This position has been filled and we are no longer accepting applications.
                </p>
              </div>
            )}

            {/* ✅ DEADLINE PASSED MESSAGE */}
            {selectedJob?.deadlineAt && isDeadlinePassed(selectedJob) && (
              <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                <p className="text-red-800 font-semibold text-center text-lg">
                  ⏰ Deadline Passed
                </p>
                <p className="text-red-600 text-center mt-1">
                  The application deadline for this position has passed.
                </p>
              </div>
            )}

            {/* Grid layout: Description + Requirements (Left), Responsibilities + Qualifications (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left column */}
              <div className="space-y-8">
                <section>
                  <h4 className="font-semibold text-gray-800 text-lg mb-2">○ Description:</h4>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedJob?.description}
                  </p>
                </section>

                {selectedJob?.requirements && (
                  <section>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">○ Requirements:</h4>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mb-4">
                      {selectedJob.requirements}
                    </p>
                  </section>
                )}
              </div>

              {/* Right column */}
              <div className="space-y-8">
                {selectedJob?.responsibilities && (
                  <section>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">○ Responsibilities:</h4>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedJob.responsibilities}
                    </p>
                  </section>
                )}

                {selectedJob?.qualifications && (
                  <section>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">○ Qualifications:</h4>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedJob.qualifications}
                    </p>
                  </section>
                )}
              </div>
            </div>

            {/* Footer: Deadline (left) and Apply button (right) */}
            <div className="mt-10 border-t border-gray-800 pt-4">
              <DialogFooter className="p-0 w-full">
                <div className="flex items-center justify-between w-full">
                  {selectedJob?.deadlineAt && (
                    <div className="text-left">
                      <h4 className="font-semibold text-red-800">Deadline</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        {new Date(selectedJob.deadlineAt).toLocaleDateString()}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={openApplyModal}
                    disabled={selectedJob?.status === "HIRED" || (selectedJob?.deadlineAt && isDeadlinePassed(selectedJob))}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-200 ${
                      selectedJob?.status === "HIRED" || (selectedJob?.deadlineAt && isDeadlinePassed(selectedJob))
                        ? "bg-gray-400 text-white cursor-not-allowed" 
                        : "bg-darkblue text-white hover:bg-darkblue/80"
                    }`}
                  >
                    {selectedJob?.status === "HIRED" ? "Hiring Completed" : 
                     selectedJob?.deadlineAt && isDeadlinePassed(selectedJob) ? "Deadline Passed" : 
                     "Apply Now"}
                  </button>
                </div>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Apply modal */}
      <Dialog open={applyOpen} onOpenChange={handleApplyModalClose}>
        <DialogContent className="w-[96vw] sm:max-w-3xl md:max-w-4xl bg-sky-50">
          <DialogHeader>
            <DialogTitle className="semibold uppercase text-darkblue">Apply for this job</DialogTitle>
            <DialogDescription>
              Please fill the form below. Job info is prefilled.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleApplySubmit} className="space-y-4 max-h-[75vh] overflow-y-scroll pr-1 scrollbar-hide relative z-[99999] border-t border-gray-900 pt-4">
            {/* Job info (read-only) */}
            <div>
              <label className="block text-xs font-medium text-gray-700">Job Title</label>
              <input value={selectedJob?.title || ""} readOnly className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-100" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">Job Description</label>
              <textarea value={selectedJob?.description || ""} readOnly rows={3} className="mt-1 w-full border rounded-lg px-3 py-2 bg-gray-100" />
            </div>

            {/* Applicant info */}
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

            {/* Experience & Education */}
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

            {/* Cover letter */}
            <div>
              <label className="block text-xs font-medium text-gray-700">Cover letter</label>
              <textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} rows={3} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Why are you a good fit?" />
            </div>

            {/* AutoCaptcha */}
            <div className="mt-4 relative z-[99999]">
              <AutoCaptcha ref={captchaRef} />
            </div>

            {/* Submit button */}
            <DialogFooter>
              <button
                type="submit"
                disabled={applying}
                className="px-4 py-2 rounded-lg bg-darkblue text-white text-sm font-medium hover:bg-darkblue/80 disabled:opacity-60"
              >
                {applying ? "Submitting..." : "Submit Application"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}