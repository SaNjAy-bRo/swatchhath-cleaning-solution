"use client";

import { useEffect, useState } from "react";
import { Star, RefreshCw, Users, MessageSquare, ClipboardCheck, ArrowLeft, Phone, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

type Submission = {
  id: string;
  name: string;
  phone: string;
  service: string;
  location: string;
  message: string;
  timestamp: string;
};

type Review = {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  timestamp: string;
};

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [feedback, setFeedback] = useState<Review[]>([]);
  const [activeTab, setActiveTab] = useState<"leads" | "reviews">("leads");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin");
      if (!res.ok) throw new Error("Failed to fetch admin data");
      const data = await res.json();
      setSubmissions(data.submissions || []);
      setFeedback(data.feedback || []);
    } catch (err: any) {
      console.error(err);
      setError("Error loading submissions. Please check backend files.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Compute stats
  const totalLeads = submissions.length;
  const totalReviews = feedback.length;
  const avgRating =
    totalReviews > 0
      ? (feedback.reduce((sum, item) => sum + item.rating, 0) / totalReviews).toFixed(1)
      : "5.0";

  const formatDate = (isoStr: string) => {
    try {
      const date = new Date(isoStr);
      return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return isoStr;
    }
  };

  return (
    <div className="min-h-screen bg-slate-55 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link
                href="/"
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                title="Back to Home"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex flex-col">
                <span className="font-heading text-base font-extrabold tracking-tight">
                  SWACHHATH CLEANING
                </span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                  Admin Control Panel
                </span>
              </div>
            </div>

            <button
              onClick={fetchData}
              disabled={loading}
              className="inline-flex items-center justify-center p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`h-4.5 w-4.5 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-150 rounded-xl text-rose-800 text-xs font-semibold">
            {error}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {/* Card 1: Leads */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-2xs flex items-center space-x-4">
            <div className="p-3.5 bg-primary-light text-primary rounded-xl">
              <ClipboardCheck className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                Quote Requests
              </span>
              <span className="text-2xl font-black text-slate-900 leading-tight">
                {loading ? "..." : totalLeads}
              </span>
            </div>
          </div>

          {/* Card 2: Reviews */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-2xs flex items-center space-x-4">
            <div className="p-3.5 bg-secondary-light text-secondary rounded-xl">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                Customer Reviews
              </span>
              <span className="text-2xl font-black text-slate-900 leading-tight">
                {loading ? "..." : totalReviews}
              </span>
            </div>
          </div>

          {/* Card 3: Avg Rating */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-2xs flex items-center space-x-4">
            <div className="p-3.5 bg-amber-50 text-amber-500 rounded-xl">
              <Star className="h-6 w-6 fill-current" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">
                Average Rating
              </span>
              <span className="text-2xl font-black text-slate-900 leading-tight">
                {loading ? "..." : avgRating} / 5.0
              </span>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="border-b border-slate-200 flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("leads")}
            className={`pb-3.5 text-sm font-bold border-b-2 transition-all duration-200 cursor-pointer ${
              activeTab === "leads"
                ? "border-primary text-primary"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            Leads / Quote Requests ({submissions.length})
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-3.5 text-sm font-bold border-b-2 transition-all duration-200 cursor-pointer ${
              activeTab === "reviews"
                ? "border-primary text-primary"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            Reviews Received ({feedback.length})
          </button>
        </div>

        {/* Loading Overlay */}
        {loading && (
          <div className="text-center py-16 text-slate-500 text-sm font-semibold">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto text-primary mb-3" />
            Loading entries from database...
          </div>
        )}

        {/* Tables */}
        {!loading && (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-2xs overflow-hidden">
            {activeTab === "leads" ? (
              /* Leads Table */
              submissions.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs font-semibold">
                  No quote requests received yet.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-3.5 px-5">Date / Time</th>
                        <th className="py-3.5 px-5">Customer</th>
                        <th className="py-3.5 px-5">Required Service</th>
                        <th className="py-3.5 px-5">Location</th>
                        <th className="py-3.5 px-5">Message / Requirements</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                      {submissions.map((sub) => (
                        <tr key={sub.id} className="hover:bg-slate-50/50">
                          <td className="py-4 px-5 whitespace-nowrap text-slate-450 font-medium">
                            <span className="flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1 text-slate-400 shrink-0" />
                              {formatDate(sub.timestamp)}
                            </span>
                          </td>
                          <td className="py-4 px-5">
                            <div className="font-extrabold text-slate-900">{sub.name}</div>
                            <a
                              href={`tel:${sub.phone}`}
                              className="text-primary hover:underline flex items-center mt-1 font-semibold"
                            >
                              <Phone className="h-3 w-3 mr-1 text-primary shrink-0" />
                              {sub.phone}
                            </a>
                          </td>
                          <td className="py-4 px-5 font-bold text-slate-800">
                            {sub.service}
                          </td>
                          <td className="py-4 px-5 whitespace-nowrap">
                            <span className="inline-flex items-center text-slate-600 font-semibold">
                              <MapPin className="h-3.5 w-3.5 mr-1 text-secondary shrink-0" />
                              {sub.location}
                            </span>
                          </td>
                          <td className="py-4 px-5 text-slate-500 max-w-xs break-words italic">
                            {sub.message ? `"${sub.message}"` : <span className="text-slate-350">No special request</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            ) : (
              /* Reviews Table */
              feedback.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs font-semibold">
                  No reviews submitted yet.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        <th className="py-3.5 px-5">Date / Time</th>
                        <th className="py-3.5 px-5">Customer</th>
                        <th className="py-3.5 px-5">Rating</th>
                        <th className="py-3.5 px-5">Review Comment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                      {feedback.map((rev) => (
                        <tr key={rev.id} className="hover:bg-slate-50/50">
                          <td className="py-4 px-5 whitespace-nowrap text-slate-450 font-medium">
                            <span className="flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1 text-slate-400 shrink-0" />
                              {formatDate(rev.timestamp)}
                            </span>
                          </td>
                          <td className="py-4 px-5">
                            <div className="font-extrabold text-slate-900">{rev.name}</div>
                            <span className="text-[10px] text-slate-400 flex items-center mt-1">
                              <MapPin className="h-3 w-3 mr-0.5 text-slate-400 shrink-0" />
                              {rev.location}
                            </span>
                          </td>
                          <td className="py-4 px-5 whitespace-nowrap">
                            <div className="flex items-center space-x-0.5">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < rev.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"
                                  }`}
                                />
                              ))}
                            </div>
                          </td>
                          <td className="py-4 px-5 text-slate-600 max-w-sm break-words italic">
                            "{rev.comment}"
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-6 text-center text-xs border-t border-slate-800">
        Swachhath Cleaning Control Board • Authorized Personnel Only
      </footer>
    </div>
  );
}
