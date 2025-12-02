const variants = {
    info: "border-amber-200 bg-amber-50 text-amber-800  ",
    success:
        "border-pink-200 bg-pink-50 text-pink-700  ",
    error:
        "border-red-300 bg-red-100 text-red-800  ",
};

const Icon = ({ variant }) => {
    let iconClass = "fa-solid ";
    switch (variant) {
        case 'success':
            iconClass += "fa-circle-check text-pink-600";
            break;
        case 'error':
            iconClass += "fa-circle-xmark text-red-600";
            break;
        case 'info':
        default:
            iconClass += "fa-circle-info text-amber-600";
            break;
    }
    return <i className={`${iconClass} text-xl mr-3 mt-0.5 shrink-0`}></i>;
};

export default function Alert({ variant = "info", children }) {
    const isError = variant === "error";
    const role = isError ? "alert" : "status";
    const live = isError ? "assertive" : "polite";

    return (
        <div
            role={role}
            aria-live={live}
            className={`mb-4 flex items-start justify-between gap-4 rounded-md border px-4 py-3 text-sm ${variants[variant]}`}
        >
            <div className="flex items-start flex-1">
                <Icon variant={variant} />
                <div className="pt-0.5">{children}</div>
            </div>


        </div>
    );
}

