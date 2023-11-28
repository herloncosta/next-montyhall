export default function Presente() {
    return (
        <div className="flex items-center flex-col relative">
            <div className="h-[25px] w-[100px] bg-green-500"></div>
            <div className="h-[60px] w-[90px] bg-green-600"></div>
            <div className="h-[85px] w-[15px] bg-red-600 absolute"></div>
            <div className="h-[15px] w-[90px] bg-red-600 absolute top-10"></div>
        </div>
    )
}
