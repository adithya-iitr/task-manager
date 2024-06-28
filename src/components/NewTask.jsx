import { forwardRef } from "react"
const NewTask=forwardRef(function NewTask({onSave},ref){
    return(
        <div className="flex items-center gap-4">
            <input type="text" name="" id="" className="w-64 px-2 py-1 rounded-sm bg-stone-200" ref={ref}/>
            <button className="text-stone-700 hover:text-stone-950" onClick={onSave}>Add Task</button>
        </div>
    )
})
export default NewTask