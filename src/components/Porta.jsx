export default function Porta({ numero }) {
    return (
        <div className="group w-[200px] h-[310px] flex flex-col items-center mx-2 cursor-pointer">
            <div className="w-[90%] border-l-4 border-t-4 border-r-4 border-orange-900 flex flex-grow hover:border-yellow-300">
                <div className="bg-orange-700 flex flex-grow flex-col items-center p-4 relative">
                    <div className="text-5xl font-medium text-slate-50 group-hover:text-yellow-200">
                        {numero}
                    </div>
                    <div className="h-[20px] w-[20px] rounded-full bg-orange-900 absolute top-[45%] self-start group-hover:bg-yellow-300"></div>
                </div>
            </div>
            <div className="h-2 w-full bg-slate-400"></div>
        </div>
    )
}
