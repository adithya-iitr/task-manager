import { forwardRef } from "react";
const Input=forwardRef(function Input({tag, type, children},ref) {
    const Tag=tag;
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{children}</label>
            <Tag type={type} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" ref={ref}/>
        </p>
    )
})
export default Input