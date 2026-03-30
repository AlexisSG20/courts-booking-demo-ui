import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function getRedirectByRole(role) {
  return role === "ADMIN" ? "/admin/bookings" : "/validate";
}

const sidePanelBase =
  "pointer-events-none absolute inset-y-0 z-0 hidden overflow-hidden xl:block";
const sidePanelWidth = "clamp(10rem, calc((100vw - 80rem) / 2 + 2rem), 22rem)";
const rightSidePanelWidth =
  "clamp(10rem, calc((100vw - 80rem) / 2 + 2rem), 22rem)";

const leftSideVisual = {
  backgroundImage:
    "linear-gradient(90deg, rgba(2, 6, 23, 0.24) 0%, rgba(2, 6, 23, 0.08) 42%, rgba(2, 6, 23, 0.02) 68%, transparent 100%), url('https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&h=1800&q=80')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "20% center",
  filter: "grayscale(8%) saturate(1.04) contrast(1.08) brightness(0.98)",
  WebkitMaskImage:
    "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.96) 60%, rgba(0,0,0,0.62) 80%, transparent 100%)",
  maskImage:
    "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.96) 60%, rgba(0,0,0,0.62) 80%, transparent 100%)",
};

const rightSideVisual = {
  backgroundImage:
    "linear-gradient(270deg, rgba(2, 6, 23, 0.42) 0%, rgba(2, 6, 23, 0.22) 42%, rgba(2, 6, 23, 0.06) 68%, transparent 100%), url('https://images.unsplash.com/photo-1552318965-6e6be7484ada?auto=format&fit=crop&w=1200&h=1800&q=80')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "72% center",
  filter: "grayscale(4%) saturate(1.08) contrast(1.06) brightness(1.02)",
  WebkitMaskImage:
    "linear-gradient(270deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.96) 60%, rgba(0,0,0,0.62) 80%, transparent 100%)",
  maskImage:
    "linear-gradient(270deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.96) 60%, rgba(0,0,0,0.62) 80%, transparent 100%)",
};

const formSideVisual = {
  backgroundImage:
    "linear-gradient(270deg, rgba(15, 23, 42, 0.06) 0%, rgba(15, 23, 42, 0.18) 34%, rgba(15, 23, 42, 0.68) 68%, rgba(15, 23, 42, 0.9) 100%), url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&h=1600&q=80')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "58% center",
  filter: "grayscale(2%) saturate(1.04) contrast(1.04) brightness(0.88)",
};

const heroCardVisual = {
  backgroundImage:
    "linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.72) 46%, rgba(15, 23, 42, 0.6) 100%), url('https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1200&h=1200&q=80')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "82% center",
  filter: "grayscale(6%) saturate(1.02) contrast(1.04) brightness(0.94)",
};

export default function Login({ me }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setSubmitting(false);
  }, []);

  if (me?.role) {
    return <Navigate to={getRedirectByRole(me.role)} replace />;
  }

  function enterDemo(role) {
    setSubmitting(true);
    localStorage.setItem("demoRole", role);
    window.location.href = getRedirectByRole(role);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (normalizedEmail === "admin@courts.com") {
      enterDemo("ADMIN");
      return;
    }

    enterDemo("STAFF");
  }

  return (
    <main className="relative min-h-[calc(100vh-73px)] overflow-x-hidden bg-transparent text-white">
      <div
        aria-hidden="true"
        className={`${sidePanelBase} left-0 opacity-68`}
        style={{ ...leftSideVisual, width: sidePanelWidth }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(90deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.015)_44%,transparent_80%)]" />
      </div>

      <div
        aria-hidden="true"
        className={`${sidePanelBase} right-0 opacity-82`}
        style={{ ...rightSideVisual, width: rightSidePanelWidth }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(255,255,255,0.09),transparent_20%),linear-gradient(270deg,rgba(2,6,23,0.06)_0%,rgba(2,6,23,0.02)_44%,transparent_80%)]" />
      </div>

      <section className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 py-6 sm:py-8 md:px-6 md:py-10 lg:min-h-[calc(100vh-73px)] lg:px-8">
        <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="relative isolate overflow-hidden rounded-xl border border-white/15 bg-slate-950/42 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-md sm:rounded-2xl sm:p-7 lg:rounded-[2rem] lg:p-10">
            <div
              className="absolute inset-0 scale-[1.01] bg-cover bg-no-repeat"
              style={heroCardVisual}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_26%),radial-gradient(circle_at_85%_18%,rgba(56,189,248,0.1),transparent_22%),linear-gradient(135deg,rgba(15,23,42,0.84),rgba(15,23,42,0.6))]" />
            <div className="absolute inset-y-0 right-0 w-[38%] bg-[linear-gradient(270deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.015)_28%,transparent_66%)]" />

            <div className="relative z-10">
              <div className="mb-4 flex flex-wrap gap-2 sm:mb-6">
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-emerald-100 sm:px-3 sm:text-[10px] lg:text-[11px]">
                  demo visual
                </span>
                <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-sky-100 sm:px-3 sm:text-[10px] lg:text-[11px]">
                  admin + staff
                </span>
                <span className="rounded-full border border-white/12 bg-white/6 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-white/65 sm:px-3 sm:text-[10px] lg:text-[11px]">
                  lozas deportivas
                </span>
              </div>

              <p className="mb-2 text-[11px] uppercase tracking-[0.42em] text-white/56 sm:mb-3 sm:text-[12px]">
                portfolio project
              </p>

              <h1 className="max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                Explora el flujo visual según el rol demo.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-200/84 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                Esta versión está preparada para navegación visual. Puedes entrar
                como
                <span className="font-medium text-emerald-200"> staff </span>
                o
                <span className="font-medium text-sky-200"> administrador </span>
                y recorrer las pantallas principales del proyecto.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
                <article className="rounded-2xl border border-white/12 bg-slate-950/34 p-4 backdrop-blur-sm sm:rounded-3xl sm:p-5">
                  <p className="text-xs text-white/56 sm:text-sm">Modo</p>
                  <p className="mt-2 text-lg font-semibold text-white sm:mt-3 sm:text-2xl">
                    Demo
                  </p>
                </article>

                <article className="rounded-2xl border border-white/12 bg-slate-950/34 p-4 backdrop-blur-sm sm:rounded-3xl sm:p-5">
                  <p className="text-xs text-white/56 sm:text-sm">Redirección</p>
                  <p className="mt-2 text-lg font-semibold text-white sm:mt-3 sm:text-2xl">
                    Por rol
                  </p>
                </article>

                <article className="rounded-2xl border border-white/12 bg-slate-950/34 p-4 backdrop-blur-sm sm:rounded-3xl sm:p-5">
                  <p className="text-xs text-white/56 sm:text-sm">Acceso</p>
                  <p className="mt-2 text-lg font-semibold text-white sm:mt-3 sm:text-2xl">
                    Local
                  </p>
                </article>
              </div>
            </div>
          </div>

          <div className="relative isolate overflow-hidden rounded-xl border border-white/15 bg-slate-950/44 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.24)] backdrop-blur-md sm:rounded-2xl sm:p-6 lg:rounded-[2rem] lg:p-8">
            <div
              className="absolute inset-0 scale-[1.01] bg-cover bg-no-repeat"
              style={formSideVisual}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(15,23,42,0.7)),radial-gradient(circle_at_top_right,rgba(132,204,22,0.14),transparent_24%)]" />
            <div className="absolute inset-y-0 right-0 w-[44%] bg-[linear-gradient(270deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.025)_24%,transparent_62%)]" />

            <div className="relative z-10">
              <div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/56 sm:text-[12px]">
                    iniciar sesión
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white sm:mt-3 sm:text-3xl">
                    Acceso demo
                  </h2>
                  <p className="mt-2 max-w-md text-xs leading-6 text-slate-200/82 sm:mt-3 sm:text-sm sm:leading-7">
                    Elige un rol para navegar por la interfaz. Esta demo pública
                    no depende del backend real.
                  </p>
                </div>

                <span className="whitespace-nowrap rounded-lg border border-emerald-300/18 bg-emerald-400/14 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-100 shadow-[0_10px_24px_rgba(16,185,129,0.12)] backdrop-blur-sm sm:rounded-xl sm:text-[11px]">
                  Navegable
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-slate-100 sm:text-sm"
                  >
                    Correo demo
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@courts.com o staff@courts.com"
                    className="h-12 w-full rounded-lg border border-white/10 bg-white/8 px-3 text-xs text-white outline-none transition placeholder:text-slate-300/45 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 sm:h-13 sm:rounded-2xl sm:px-4 sm:text-base lg:h-14"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="password"
                      className="block text-xs font-medium text-slate-100 sm:text-sm"
                    >
                      Contraseña demo
                    </label>

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="cursor-pointer text-xs text-emerald-300 transition hover:text-emerald-200 sm:text-sm"
                    >
                      {showPassword ? "Ocultar" : "Mostrar"}
                    </button>
                  </div>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Cualquier texto"
                    className="h-12 w-full rounded-lg border border-white/10 bg-white/8 px-3 text-xs text-white outline-none transition placeholder:text-slate-300/45 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 sm:h-13 sm:rounded-2xl sm:px-4 sm:text-base lg:h-14"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-emerald-500 px-4 text-xs font-medium text-white transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60 sm:h-13 sm:rounded-2xl sm:px-5 sm:text-base lg:h-14"
                >
                  {submitting ? "Ingresando..." : "Entrar a la demo"}
                </button>
              </form>

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/30 p-4 backdrop-blur-sm sm:mt-6 sm:rounded-3xl sm:p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/56 sm:text-[12px]">
                  cuentas demo
                </p>

                <div className="mt-3 space-y-2 text-xs sm:mt-4 sm:space-y-3 sm:text-sm">
                  <button
                    type="button"
                    onClick={() => enterDemo("STAFF")}
                    className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-left transition hover:border-emerald-300/35 hover:bg-emerald-400/14 sm:rounded-2xl sm:px-4 sm:py-3"
                  >
                    <span className="text-emerald-100">Cuenta STAFF</span>
                    <span className="text-emerald-300">/validate</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => enterDemo("ADMIN")}
                    className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-sky-400/20 bg-sky-400/10 px-3 py-2 text-left transition hover:border-sky-300/35 hover:bg-sky-400/14 sm:rounded-2xl sm:px-4 sm:py-3"
                  >
                    <span className="text-sky-100">Cuenta ADMIN</span>
                    <span className="text-sky-300">/admin/bookings</span>
                  </button>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-300/62 sm:mt-5 sm:leading-6">
                Para ver el flujo completo real con backend, validación y
                persistencia, usa el video demo o la versión local del proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}