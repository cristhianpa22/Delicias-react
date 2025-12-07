export default function Loading({ text = "Horneando sueños..." }) {
    return (
        <div className="flex flex-col items-center justify-center p-10 bg-pink-50 rounded-xl shadow-xl border border-pink-200">
            <i className="fa-solid fa-cookie-bite fa-spin-pulse fa-4x mb-4 text-amber-800 "></i>
            <p className="text-xl font-semibold text-pink-700 mt-2">{text}</p>
            <p className="text-sm text-pink-500">Un momento, por favor...</p>
        </div>
    );
}
