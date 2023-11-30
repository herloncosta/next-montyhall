import PortaModel from "@/model/porta";

interface PortaProps {
    porta: PortaModel
}

export default function Porta(props: PortaProps) {
    const { porta } = props;
    const selecionada = porta.selecionada
    
    return (
        <div className="group w-[200px] h-[310px] flex flex-col items-center mx-2 cursor-pointer">
            <div className={`w-[90%] border-l-4 border-t-4 border-r-4 flex flex-grow 
                ${selecionada ? 'border-yellow-300' : 'border-orange-900'}`}> 
                <div className="bg-orange-700 flex flex-grow flex-col items-center p-4 relative">
                    <div className="text-5xl font-medium text-slate-50 group-hover:text-yellow-200">
                        {porta.numero}
                    </div>
                    <div className={`h-[20px] w-[20px] rounded-full  absolute top-[45%] 
                        self-start ${selecionada ? 'bg-yellow-300' : 'bg-orange-900'}`}></div>
                </div>
            </div>
            <div className="h-2 w-full bg-slate-400"></div>
        </div>
    )
}
