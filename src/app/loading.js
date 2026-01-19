export default function Loading() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-black fixed inset-0 z-[60]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
                <div className="text-violet-500 font-medium text-sm animate-pulse">Loading...</div>
            </div>
        </div>
    );
}
