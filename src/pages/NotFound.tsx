import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Sparkles, FolderGit2 } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      try {
        document.head.removeChild(meta);
      } catch {
        // ignore
      }
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFCC00] text-black font-sans p-6 selection:bg-black selection:text-[#FFCC00]">
      <div className="w-full max-w-lg p-8 sm:p-12 rounded-3xl bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-center space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-[#FFCC00] text-xs font-mono font-black uppercase">
          <Sparkles className="h-3.5 w-3.5" />
          404 Routing Exception
        </span>

        <h1 className="text-6xl sm:text-8xl font-black tracking-tight leading-none text-black">
          404
        </h1>

        <p className="text-base sm:text-lg font-bold text-neutral-800">
          Oops! The requested route <code className="font-mono text-sm bg-neutral-100 px-2 py-1 rounded border border-black/30">{location.pathname}</code> does not exist on Narala Manoj Yadav's portfolio.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-[#FFCC00] hover:bg-neutral-800 font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:scale-95"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Frontpage</span>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-100 font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:scale-95"
          >
            <FolderGit2 className="h-4 w-4" />
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
