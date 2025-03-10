import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react"
import { Button } from "../../../components/button"
import { useState } from "react"
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from 'date-fns'


interface DestinationDateProps{
    isGestInputOpen: boolean
    closeGestInput: () => void
    openGestInput: () => void
    evenStartAndEndDates: DateRange | undefined
    setDestination: (destination: string) => void
    setEvenStartAndEndDates: (dates: DateRange | undefined) => void
}

export function DestinationDate({closeGestInput, isGestInputOpen, openGestInput, setDestination, setEvenStartAndEndDates, evenStartAndEndDates }: DestinationDateProps){
    const [isDatePickerOpen ,setIsDatePickerOpen] =  useState(false)
    

    function openDatePicker(){
      return setIsDatePickerOpen(true)
    }
    function closeDatePicker(){
      return setIsDatePickerOpen(false)
    }
    const dateSelect = evenStartAndEndDates && evenStartAndEndDates.from && evenStartAndEndDates.to
    ? format(evenStartAndEndDates.from, "d ' de 'LLL").concat(' a ').concat(format(evenStartAndEndDates.to, "d ' de 'LLL"))
    : null
    return(
        <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3'>
        <div className='flex items-center gap-2 flex-1'>
          <MapPin className='size-5 text-zinc-400'/>
          <input 
          disabled={isGestInputOpen} 
          type='text' 
          placeholder='Para onde você vai?'
          className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
          onChange={event => setDestination(event.target.value)}/>
        </div>

        <button onClick={openDatePicker} disabled={isGestInputOpen} className='flex items-center gap-2 text-left w-60'>
          <Calendar className='size-5 text-zinc-400'/>
          <span className='text-lg text-zinc-400 w-40 flex-1'>
            {dateSelect || 'Quando?'}
            </span>
        </button>
        {isDatePickerOpen ? (

        <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
           <div className='rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
             <div className='space-y-2'>
               <div className='flex items-center justify-between'>
                 <h2 className='text-lg font-semibold'>Selecione a data</h2>
                 <button onClick={closeDatePicker}>
                   <X className='size-5 text-zinc-400'></X>
  
                 </button>

               </div>
               
             </div>
             <DayPicker mode="range" selected={evenStartAndEndDates} onSelect={setEvenStartAndEndDates}/>
           </div>
         </div>
        ):null}

        <div className='w-px h-6 bg-zinc-800'></div>

       {isGestInputOpen ? (
        <Button onClick={closeGestInput} variant="secundary" >
          ALterar local/data
          <Settings2 className='size-5'/>
        </Button>
        
       ):(
        <Button onClick={openGestInput} variant="primary" >
          Continuar
          <ArrowRight className='size-5'/>
        </Button>
        
       )}
      </div>
    )
}