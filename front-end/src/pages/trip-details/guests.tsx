import { CircleDashed, UserCog } from "lucide-react";
import { ImportantLinks } from "./important-links";
import { Button } from "../../components/button";

export function Guests(){
    return(
        <div className="w-80 space-y-6">
                    <ImportantLinks/>
                    <div className='w-full h-px bg-zinc-800' />
                    
                    <div>
                        <div className="space-y-6">
                            <h2 className="font-semibold text-xl">Convidados</h2>
                            <div className="space-y-5">
                                <div className="flex items-center justify-between gab-4">
                                    <div className="space-y-1.5">
                                        <span className="block font-medium text-zinc-100">Jessica withe</span>
                                        <span className="block text-sm text-zinc-400 truncate ">
                                            jessica.white44@yahoo.com
                                        </span>
                                    </div>
                                    <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                                </div>
                                <div className="flex items-center justify-between gab-4">
                                    <div className="space-y-1.5">
                                        <span className="block font-medium text-zinc-100">Dr. Rita Pacocha</span>
                                        <span className="block text-sm text-zinc-400 truncate ">
                                        lacy.stiedemann@gmail.com
                                        </span>
                                    </div>
                                    <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                                </div>
                            </div>
                            <Button variant="secundary" size="full"> 
                                <UserCog className='size-5'/>
                                Gerenciar convidados
                            </Button>
                    </div>
                    <div className='w-full h-px bg-zinc-800' />
                </div>
        </div>
    )
}