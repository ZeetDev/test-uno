"use client";

function Button({ bgColor, mt }: { bgColor: string, mt: number }) {
    return <button className={`py-2 px-3 mt-[${mt}px] bg-[${bgColor}]`}>Button</button>;
}

export default Button;
