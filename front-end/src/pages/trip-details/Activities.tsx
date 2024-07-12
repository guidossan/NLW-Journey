import { CircleCheck, CircleDashed } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale'

export interface Activities{
    data: string
    activities: {
        id: string
        title: string
        occurs_at: string
    }[]
}
interface ActivitiesProps {
    activities: Activities[];
}

export function Activity({ activities }: ActivitiesProps){
    const {tripId} = useParams()

   

    return(
        <div className="space-y-8">
            {activities.map((category) => {
            return (
                <div key={`trip-${tripId}-activities-${category.data}`} className="space-y-2.5">
                    <div className="flex gap-2 items-baseline">
                        <span className="text-xl text-zinc-300 font-semibold">Dia {format(category.data, 'dd')}</span>
                        <span className="text-xs text-zinc-500">{format(category.data, 'EEEE',{ locale: ptBR})}</span>
                    </div>
                    {category.activities.length > 0 ?(
                        <div>
                            {category.activities.map((activity) => {
                                const isDone = new Date(activity.occurs_at).getTime() <= new Date().getTime();
                                return(
                                <div key={activity.id} className="space-y-2.5">
                                    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    { isDone ? <CircleCheck className="size-5 text-lime-300" /> : <CircleDashed className="size-5 text-zinc-400" /> }
                                        <span className="text-zinc-100">{activity.title}</span>
                                        <span className="text-zinc-400 text-sm ml-auto">{format(new Date(activity.occurs_at), 'HH:mm')}</span>
                                    </div>
                                </div> 
                                )
                            })}
                        </div>
                    ):(
                        <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
                    )}
                </div>
            )
            })}
        
        </div>
    )
}