import React from "react";

function Button({ title = "Click!", primary = true, isClickable = true }) {
    const classBase = "border-2 w-full px-10 py-4 mt-8 text-3xl cursor-pointer shadow transition-all disabled:cursor-not-allowed disabled:opacity-75 disabled:shadow-none focus:border-[#191919] hover:shadow-none";
    const classType = primary ?
        "bg-actions border-actions text-secondary" :
        "bg-tertiary border-tertiary text-black"
        ;

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