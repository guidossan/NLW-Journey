import { AtSign, Calendar, Circle, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, Tag, User, UserCog, X } from "lucide-react";
import { useState } from "react";
import { CreateActivity } from "./creat-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activity } from "./Activities";
import { DestinationDate } from "./destination-date";

export function TripDetailsPage(){
    const  [isCreateActivityModal, setIsCreateActivityModal] =useState(false)

    function openActivityModal(){
        setIsCreateActivityModal(true)
    }
    function closeActivityModal(){
        setIsCreateActivityModal(false)
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinationDate/>

            
            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        
                        <button onClick={openActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                            <Plus className='size-5'/>
                            Cadastrar nova atividade
                        </button>
                    </div>
                    <Activity/>
                </div>
                <Guests/>
           
            </main>
            {isCreateActivityModal ? (
                <CreateActivity closeActivityModal={closeActivityModal}/>
            ) : null}
        </div>
    )
}