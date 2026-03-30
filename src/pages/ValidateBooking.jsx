import { useState } from "react";

import ValidateHero from "../components/validate/ValidateHero";
import TokenValidationCard from "../components/validate/TokenValidationCard";
import ScannerCard from "../components/validate/ScannerCard";
import BookingResultCard from "../components/validate/BookingResultCard";
import ValidateEmptyState from "../components/validate/ValidateEmptyState";

const sidePanelBase =
  "pointer-events-none absolute inset-y-0 z-0 hidden overflow-hidden xl:block";
const sidePanelWidth = "clamp(9rem, calc((100vw - 80rem) / 2 + 1.5rem), 20rem)";

const leftSideVisual = {
  backgroundImage: [
    "linear-gradient(90deg, rgba(2, 6, 23, 0.28) 0%, rgba(2, 6, 23, 0.09) 42%, rgba(2, 6, 23, 0.02) 68%, transparent 100%)",
    "radial-gradient(circle at 38% 72%, rgba(255,255,255,0.96) 0 8%, rgba(203,213,225,0.92) 8% 10%, transparent 10.2% 100%)",
    "linear-gradient(145deg, transparent 0 61%, rgba(255,255,255,0.26) 61% 62.4%, transparent 62.4% 100%)",
    "linear-gradient(180deg, rgba(22, 163, 74, 0.9) 0%, rgba(21, 128, 61, 0.92) 100%)",
  ].join(", "),
  backgroundSize: "cover, 100% 100%, 100% 100%, 100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  filter: "saturate(1.04) contrast(1.02) brightness(0.98)",
  WebkitMaskImage:
    "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.94) 60%, rgba(0,0,0,0.58) 80%, transparent 100%)",
  maskImage:
    "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.94) 60%, rgba(0,0,0,0.58) 80%, transparent 100%)",
};

const rightSideVisual = {
  backgroundImage: [
    "linear-gradient(270deg, rgba(2, 6, 23, 0.38) 0%, rgba(2, 6, 23, 0.16) 42%, rgba(2, 6, 23, 0.04) 68%, transparent 100%)",
    "radial-gradient(circle at 54% 32%, rgba(255,255,255,0.96) 0 7%, rgba(203,213,225,0.92) 7% 8.8%, transparent 9% 100%)",
    "linear-gradient(205deg, transparent 0 56%, rgba(255,255,255,0.22) 56% 57.2%, transparent 57.2% 100%)",
    "linear-gradient(180deg, rgba(21, 128, 61, 0.94) 0%, rgba(20, 83, 45, 0.96) 100%)",
  ].join(", "),
  backgroundSize: "cover, 100% 100%, 100% 100%, 100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  filter: "saturate(1.06) contrast(1.04) brightness(1.01)",
  WebkitMaskImage:
    "linear-gradient(270deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.94) 60%, rgba(0,0,0,0.58) 80%, transparent 100%)",
  maskImage:
    "linear-gradient(270deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.94) 60%, rgba(0,0,0,0.58) 80%, transparent 100%)",
};

const DEMO_BOOKINGS = {
  "DEMO-AB12CD34": {
    id: "demo-1",
    token: "DEMO-AB12CD34",
    date: "2026-03-30",
    startHour: 8,
    endHour: 9,
    peopleCount: 2,
    totalPrice: 40,
    usedAt: null,
    court: { id: 1, name: "Losa 1" },
  },
  "DEMO-EF56GH78": {
    id: "demo-2",
    token: "DEMO-EF56GH78",
    date: "2026-03-30",
    startHour: 10,
    endHour: 11,
    peopleCount: 4,
    totalPrice: 80,
    usedAt: "2026-03-30T10:05:00.000Z",
    court: { id: 1, name: "Losa 1" },
  },
  "DEMO-IJ90KL12": {
    id: "demo-3",
    token: "DEMO-IJ90KL12",
    date: "2026-03-31",
    startHour: 18,
    endHour: 19,
    peopleCount: 3,
    totalPrice: 60,
    usedAt: null,
    court: { id: 2, name: "Losa 2" },
  },
};

export default function ValidateBooking() {
  const [scanning, setScanning] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingIn, setCheckingIn] = useState(false);

  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");

  const validate = async (maybeToken) => {
    const t = String(maybeToken ?? token).trim().toUpperCase();

    setError("");
    setBooking(null);

    if (!t) {
      setError("Ingresa un token demo.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const found = DEMO_BOOKINGS[t];

      if (!found) {
        setError("No existe una reserva demo con ese token.");
        setLoading(false);
        return;
      }

      setToken(t);
      setBooking(found);
      setLoading(false);
    }, 350);
  };

  const checkIn = async () => {
    if (!booking?.token) return;

    setCheckingIn(true);
    setError("");

    setTimeout(() => {
      if (booking.usedAt) {
        setError("Este token demo ya figura como usado.");
        setCheckingIn(false);
        return;
      }

      setBooking({
        ...booking,
        usedAt: new Date().toISOString(),
      });

      setCheckingIn(false);
    }, 350);
  };

  const startScan = () => {
    setError("");
    setBooking(null);
    setScanning(true);
    setVideoReady(false);

    setTimeout(() => {
      setVideoReady(true);
      setToken("DEMO-AB12CD34");
      setScanning(false);
      validate("DEMO-AB12CD34");
    }, 900);
  };

  const stopScan = () => {
    setScanning(false);
    setVideoReady(false);
  };

  return (
    <main className="relative min-h-[calc(100vh-73px)] overflow-x-hidden bg-transparent text-white">
      <div
        aria-hidden="true"
        className={`${sidePanelBase} left-0 opacity-66`}
        style={{ ...leftSideVisual, width: sidePanelWidth }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(90deg,rgba(2,6,23,0.05)_0%,rgba(2,6,23,0.015)_44%,transparent_80%)]" />
      </div>

      <div
        aria-hidden="true"
        className={`${sidePanelBase} right-0 opacity-70`}
        style={{ ...rightSideVisual, width: sidePanelWidth }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(270deg,rgba(2,6,23,0.05)_0%,rgba(2,6,23,0.015)_44%,transparent_80%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-6 sm:py-8 md:px-6 md:py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          <ValidateHero />

          {error && (
            <div className="rounded-lg sm:rounded-2xl border border-rose-400/24 bg-rose-400/10 px-4 py-3 text-xs sm:text-sm text-rose-100">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-5 sm:gap-6">
              <TokenValidationCard
                token={token}
                setToken={setToken}
                loading={loading}
                scanning={scanning}
                validate={validate}
                startScan={startScan}
                stopScan={stopScan}
              />
            </div>

            <div className="grid gap-6">
              <ValidateEmptyState scanning={scanning} booking={booking} />

              <ScannerCard
                scanning={scanning}
                videoReady={videoReady}
                videoRef={{ current: null }}
                onVideoPlaying={() => setVideoReady(true)}
              />

              <BookingResultCard
                booking={booking}
                checkingIn={checkingIn}
                checkIn={checkIn}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}