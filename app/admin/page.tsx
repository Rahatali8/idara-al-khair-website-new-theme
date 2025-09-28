"use client";
import { useState } from "react";
import { LogOut, RefreshCw, Mail } from "lucide-react";

export default function AdminPage() {
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [messages, setMessages] = useState<any[]>([]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/admin/messages", {
                method: "GET",
                headers: { "x-admin-password": password },
            });
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
            const res = await fetch("/api/admin/messages", {
                headers: { "x-admin-password": password },
            });
            const data = await res.json();
            if (!res.ok) setError(data?.error || "Failed to fetch");
            else setMessages(data.messages || []);
        } catch (err: any) {
            setError(String(err));
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">

                {/* Header */}
                <div className="sticky top-0 bg-white/70 backdrop-blur-md shadow-sm z-50 rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 flex items-center gap-2">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                        Admin <span className="text-indigo-600">Messages</span>
                    </h1>
                    {loggedIn && (
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <span className="text-xs sm:text-sm text-green-600 font-semibold animate-pulse">
                                🟢 Logged in
                            </span>
                            <button
                                onClick={reload}
                                disabled={loading}
                                className="flex items-center gap-1 text-xs sm:text-sm text-indigo-600 hover:text-indigo-800 transition"
                            >
                                <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
                                {loading ? "Loading..." : "Reload"}
                            </button>
                            <button
                                onClick={() => {
                                    setLoggedIn(false);
                                    setMessages([]);
                                    setPassword("");
                                }}
                                className="flex items-center gap-1 text-xs sm:text-sm text-red-600 hover:text-red-800 transition"
                            >
                                <LogOut className="w-3 h-3 sm:w-4 sm:h-4" /> Logout
                            </button>
                        </div>
                    )}
                </div>

                {/* Login Form */}
                {!loggedIn && (
                    <form
                        onSubmit={handleLogin}
                        className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-4 sm:p-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center animate-fade-in"
                    >
                        <input
                            type="password"
                            placeholder="🔑 Admin password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-slate-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 w-full sm:flex-1 focus:ring-2 focus:ring-indigo-500 outline-none bg-white/90 text-sm sm:text-base"
                        />
                        <button
                            disabled={loading}
                            className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg text-sm sm:text-base"
                        >
                            {loading ? "Checking..." : "Login"}
                        </button>
                    </form>
                )}

                {/* Error */}
                {error && (
                    <div className="bg-red-100 border border-red-300 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-sm animate-shake text-sm sm:text-base">
                        {error}
                    </div>
                )}

                {/* Messages */}
                {loggedIn && (
                    <div>
                        {messages.length === 0 ? (
                            <div className="text-gray-600 italic text-center py-12 text-base sm:text-lg">
                                📭 No messages found.
                            </div>
                        ) : (
                            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {messages.map((m) => (
                                    <div
                                        key={m.filename}
                                        className="bg-white/80 backdrop-blur-md border border-indigo-100 shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-2xl hover:scale-[1.02] transition"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-[11px] sm:text-xs text-slate-500 mb-3">
                                            <span className="font-mono break-all">{m.filename}</span>
                                            <span>{new Date(m.savedAt).toLocaleString()}</span>
                                        </div>

                                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                            <div>
                                                <dt className="text-[11px] sm:text-xs text-slate-500">Name</dt>
                                                <dd className="font-semibold text-slate-900 break-words">
                                                    {m.name}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-[11px] sm:text-xs text-slate-500">Email</dt>
                                                <dd className="text-indigo-600 break-words">{m.email}</dd>
                                            </div>
                                            <div>
                                                <dt className="text-[11px] sm:text-xs text-slate-500">Phone</dt>
                                                <dd>{m.phone || "N/A"}</dd>
                                            </div>
                                            <div>
                                                <dt className="text-[11px] sm:text-xs text-slate-500">Date</dt>
                                                <dd>{m.date || "N/A"}</dd>
                                            </div>
                                        </dl>

                                        <div className="mt-4">
                                            <dt className="text-[11px] sm:text-xs text-slate-500">Message</dt>
                                            <dd className="mt-1 p-2 sm:p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 whitespace-pre-wrap text-sm break-words">
                                                {m.message}
                                            </dd>
                                        </div>

                                        {m.sendError && (
                                            <div className="mt-3 text-xs sm:text-sm text-red-600">
                                                ⚠️ Send error: {m.sendError}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Footer Note */}
                <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-3 sm:p-4 text-[11px] sm:text-xs text-slate-600 shadow-inner text-center">
                    <p className="leading-relaxed font-medium">
                        🔒 This page is <span className="text-red-600 font-semibold">restricted</span>.
                        If you are an <span className="text-indigo-600 font-semibold">Admin</span>, please use your credentials to access.
                    </p>
                </div>

            </div>
        </main>
    );
}
