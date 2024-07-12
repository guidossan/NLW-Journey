

import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestModal } from './invite-guest-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationDate } from './steps/destination-date'
import { InviteGuest } from './steps/invite-guest'
import { DateRange } from 'react-day-picker'
import { api } from '../../lib/axios'

export function CreateTripPage(){
    const navegate = useNavigate()
    
    const [isGestInputOpen, setIsGestInputOpen] =  useState(false)
    const [isGestModal, setIsGestModal] =  useState(false)
    const [isConfirmTripModal, setConfirmTripModal] =  useState(false)
  
    const [destination, setDestination]  = useState('')
    const [ownerName, setOwnerName]  = useState('')
    const [ownerEmail, setOwnerEmail]  = useState('')
    const [evenStartAndEndDates ,setEvenStartAndEndDates] =  useState<DateRange |  undefined>()
    
    const [emalsToInvite, setEmailsToInvate] = useState(['email@email.com'])
  
    function openGestInput(){
      setIsGestInputOpen(true)
    }
    function closeGestInput(){
      
      setIsGestInputOpen(false)
    }
    function openGestModal(){
      setIsGestModal(true)
    }
    function closeGestModal(){
      setIsGestModal(false)
    }
    function openConfirmTripModal(){
      setConfirmTripModal(true)
    }
    function closeConfirmTripModal(){
      setConfirmTripModal(false)
    }
    function addEmail(event: FormEvent<HTMLFormElement>){
      event.preventDefault()
      const data = new FormData(event.currentTarget)
      const email = data.get('email')?.toString()
      if (!email){
        return
      }
  
      if (emalsToInvite.includes(email)){
        return
      }
      setEmailsToInvate([
        ...emalsToInvite,
        email
      ])
      event.currentTarget.reset()
    }
    function removeEmailFromInvate(emailToRemove: string){
      const newEmailList = emalsToInvite.filter(email => email !== emailToRemove)
      setEmailsToInvate(newEmailList)
    }
    async function createTrip(event: FormEvent<HTMLFormElement>){
      
      
      
      event.preventDefault()
      console.log(destination)
      console.log(evenStartAndEndDates)
      console.log(emalsToInvite)
      console.log(ownerEmail)
      console.log(ownerName)
      
      if(!destination){
        return
      }
      if(!evenStartAndEndDates?.from || !evenStartAndEndDates?.to){
        return
      }
      if(emalsToInvite.length === 0){
        return
      }
      if(!ownerEmail || !ownerName){
        return
      }
      const response = await api.post('/trips', {
        destination: destination,
        emails_to_invite: emalsToInvite,
        owner_name: ownerName,
        owner_email: ownerEmail,
        starts_at: evenStartAndEndDates.from,
        ends_at: evenStartAndEndDates.to
    })
      const { tripId } =response.data
      console.log(response.data)
      navegate(`/trips/${tripId}`)
    }
    return (
      <div className='w-full h-screen flex items-center justify-center shadow-shape bg-patter bg-no-repeat bg-center'>
        <div className='max-w-3xl w-full px-6 text-center space-y-10'>
          <div className='flex flex-col items-center gap-3'>
            <img src='logo.svg' alt='plann.r'/>
            <p className='text-zinc-300'>Convide seus amigos e planeje sua próxima viagem!</p>
          </div>
          <div className='space-y-4'>
  
            <DestinationDate
            closeGestInput={closeGestInput} 
            isGestInputOpen={isGestInputOpen} 
            openGestInput={openGestInput}
            setDestination={setDestination}
            evenStartAndEndDates={evenStartAndEndDates}
            setEvenStartAndEndDates={setEvenStartAndEndDates}/>
  
            {isGestInputOpen ? (
              <InviteGuest 
              emalsToInvite={emalsToInvite}
               openConfirmTripModal={openConfirmTripModal} 
               openGestModal={openGestModal}/>
            ) : null}
            </div>
  
          <p className='text-sm text-zinc-500'>
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br/>
          com nossos <a className='text-zinc-300 underline' href='#'>termos de uso</a> e <a className='text-zinc-300 underline' href='#'>políticas de privacidade.</a>
          </p>
        </div>
  
        {isGestModal ? ( 
          <InviteGuestModal
            emalsToInvite={emalsToInvite}
            addEmail={addEmail}
            closeGestModal={closeGestModal}
            removeEmailFromInvate={removeEmailFromInvate}
          />
        ) : null}
  
         {isConfirmTripModal ? (
           <ConfirmTripModal 
           closeConfirmTripModal={closeConfirmTripModal} 
           createTrip={createTrip}
           setOwnerName={setOwnerName}
           setOwnerEmail={setOwnerEmail}/>
         ) : null}
  
      </div>
  
      
    )
}