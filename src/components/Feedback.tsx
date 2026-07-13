"use client";

import { useState } from "react";
import { Star, MessageSquarePlus, CheckCircle, ShieldCheck } from "lucide-react";

type Review = {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
};

export default function Feedback() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Ramesh Hegde",
      location: "Udupi",
      rating: 5,
      comment: "Outstanding solar panel and sump cleaning service! They arrived on time and cleaned everything using pressure jets. Highly recommend Swachhath.",
      date: "2 weeks ago",
    },
    {
      name: "Priya Kamath",
      location: "Mangaluru",
      rating: 5,
      comment: "We booked flat deep cleaning. The floor scrubbing machine they used made our old marble floors look brand new. Professional team!",
      date: "1 month ago",
    },
    {
      name: "Vikram Shenoy",
      location: "Manipal",
      rating: 5,
      comment: "Very transparent with their prices. They explicitly told us the transport costs upfront. Sump cleaning was highly professional.",
      date: "3 weeks ago",
    },
  ]);

  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    setLoading(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, location, rating, comment }),
      });

      if (res.ok) {
        // Add new review to local state list for display
        setReviews([
          {
            name,
            location: location || "Karnataka",
            rating,
            comment,
            date: "Just now",
          },
          ...reviews,
        ]);
        setSuccess(true);
        setName("");
        setLocation("");
        setRating(5);
        setComment("");
        setTimeout(() => {
          setSuccess(false);
          setFormOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reviews" className="section-compact bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
          <div>
            <span className="text-xs font-extrabold text-primary tracking-widest uppercase block mb-1">
              Testimonials
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Real reviews from real home and business owners in Coastal Karnataka.
            </p>
          </div>
          
          <button
            onClick={() => setFormOpen(!formOpen)}
            className="mt-3 sm:mt-0 inline-flex items-center text-sm font-bold bg-white text-primary border border-primary/20 hover:border-primary px-3.5 py-2.5 rounded-lg hover:bg-slate-50 cursor-pointer transition-all shrink-0 w-fit"
          >
            <MessageSquarePlus className="h-4.5 w-4.5 mr-2" />
            Write a Review
          </button>
        </div>

        {/* Feedback Expandable Form */}
        {formOpen && (
          <div className="mb-6 bg-white border border-slate-150 p-4 rounded-xl shadow-xs max-w-xl animate-fadeIn">
            <h3 className="text-sm font-extrabold text-slate-900 mb-3">Share Your Experience</h3>
            
            {success ? (
              <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 border border-emerald-100 p-3 rounded-lg text-xs font-semibold">
                <CheckCircle className="h-4.5 w-4.5 shrink-0" />
                <span>Thank you! Your review has been added successfully.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full text-sm border border-slate-200 rounded-lg p-2.5 focus:outline-hidden focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Location</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Mangaluru, Udupi"
                      className="w-full text-sm border border-slate-200 rounded-lg p-2.5 focus:outline-hidden focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Rating</label>
                  <div className="flex items-center space-x-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="cursor-pointer"
                      >
                        <Star
                          className={`h-5 w-5 ${
                            star <= rating ? "text-amber-400 fill-amber-400" : "text-slate-250"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Review *</label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us what you liked about our service..."
                    className="w-full text-sm border border-slate-200 rounded-lg p-2.5 focus:outline-hidden focus:border-primary"
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setFormOpen(false)}
                    className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-hover rounded-lg shadow-xs disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit Review"}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-150 p-4 rounded-xl shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < rev.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
                </div>
                <p className="text-sm text-slate-655 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-800">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.location}</p>
                </div>
                <div className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
                  <ShieldCheck className="h-4 w-4 mr-0.5 text-emerald-500" />
                  <span>Verified Clean</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
