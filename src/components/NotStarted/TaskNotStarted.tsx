import Number from "./Number"

export default function TasksNotStarted() {
    return (
        <div className="w-[20%] h-[12em] bg-[#FEE6E7] rounded m-8">
            <div className="w-[12em] p-2">
                <h1 className="font-bold text-xl">Tasks not started</h1>
            </div>
            <div className="w-[7em] ml-[45px] p-2">
                <Number />
            </div>
            <h2 className="text-xs m-3 mb-2 text-[#868686] font-bold">All tasks</h2>

        </div>
    )
}