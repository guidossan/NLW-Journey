import { CheckCircle, CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { ImportantLinks } from "./important-links";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Participants{
    id: string
    name: string | null
    email: string
    isConfirmed: boolean
}

export function Guests(){
    const {tripId} = useParams()
    const [participants, setParticipants] = useState<Participants[]>([])

    useEffect(()=> {
        api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
    }, [tripId])

    return(
        <div className="w-80 space-y-6">
            <ImportantLinks/>
            <div className='w-full h-px bg-zinc-800' />
            
            <div>
            <div className="space-y-6">
                <h2 className="font-semibold text-xl">Convidados</h2>
                <div className="space-y-5">
                    {participants.map((participant, index) => {
                        return(
                            <div key={participant.id} className="flex items-center justify-between gab-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">{participant.name && `Convidado ${index}`}</span>
                                    <span className="block text-sm text-zinc-400 truncate ">
                                        {participant.email}
                                    </span>
                                </div>
                                {participant.isConfirmed ? (
                                    <CheckCircle2 className="size-5 shirink-0"/>
                                ):(
                                    <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                                )}
                            </div>
                            
                        )
                    })}
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