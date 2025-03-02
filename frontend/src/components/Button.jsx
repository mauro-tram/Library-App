import React from "react";

function Button({ title = "Click!", primary = true, isClickable = true }) {
    const classBase = "w-full px-10 py-4 mt-8 text-3xl disabled:opacity-75";
    const classType = primary ? "bg-actions text-secondary" : "bg-tertiary text-black";


    return (
        <button
            disabled={!isClickable}
            className={classBase + ' ' + classType + ' '}
        >
            {title}
        </button>
    );
};

export default Button;