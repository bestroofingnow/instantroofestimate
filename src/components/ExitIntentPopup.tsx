'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, Gift, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

interface ExitIntentPopupProps {
  delay?: number; // Delay in ms before enabling exit detection
  cookieDays?: number; // Days before showing popup again after dismissal
}

export function ExitIntentPopup({ delay = 5000, cookieDays = 7 }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    // Store dismissal in localStorage
    const dismissedUntil = Date.now() + cookieDays * 24 * 60 * 60 * 1000;
    localStorage.setItem('exitPopupDismissed', dismissedUntil.toString());
  }, [cookieDays]);

  useEffect(() => {
    // Check if popup was recently dismissed
    const dismissedUntil = localStorage.getItem('exitPopupDismissed');
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil)) {
      return;
    }

    // Enable exit detection after delay
    const enableTimer = setTimeout(() => {
      setIsEnabled(true);
    }, delay);

    return () => clearTimeout(enableTimer);
  }, [delay]);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect when mouse leaves towards the top of the viewport
      if (e.clientY <= 0 && !isVisible) {
        setIsVisible(true);
      }
    };

    // Mobile: detect back button or tab switch intent
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && !isVisible) {
        // Don't show popup on visibility change - too intrusive
        // Just store that they tried to leave
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isEnabled, isVisible]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isVisible, handleClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full animate-scale-in overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-8 text-white text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Gift className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Wait! Don't Miss Out
          </h2>
          <p className="text-blue-100">
            Get your free roof estimate before you go
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900">100% Free Estimate</p>
                <p className="text-sm text-slate-600">No credit card, no obligation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Results in 60 Seconds</p>
                <p className="text-sm text-slate-600">Instant satellite roof measurement</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Save Thousands</p>
                <p className="text-sm text-slate-600">Compare prices before you commit</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/"
            onClick={handleClose}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors text-lg"
          >
            Get My Free Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="text-center text-sm text-slate-500 mt-4">
            Join 10,000+ homeowners who've saved on their roofs
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
