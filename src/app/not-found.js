import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen bg-black flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent mb-4">
                404
            </h1>
            <h2 className="text-2xl text-white font-bold mb-6">Page Not Found</h2>
            <p className="text-gray-400 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/">
                <button className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                    Return Home
                </button>
            </Link>
        </div>
    );
}
