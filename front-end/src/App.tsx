import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react'
import './App.css'
import { useState } from 'react'

export function App() {
  const [isGestInputOpen, setIsGestInputOpen] =  useState(false)


  function openGestInput(){
    setIsGestInputOpen(true)
  }
  function closeGestInput(){
    
    setIsGestInputOpen(false)
  }
  return (
    <div className='w-full h-screen flex items-center justify-center shadow-shape bg-patter bg-no-repeat bg-center'>
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <div className='flex flex-col items-center gap-3'>
          <img src='logo.svg' alt='plann.r'/>
          <p className='text-zinc-300'>Convide seus amigos e planeje sua próxima viagem!</p>
        </div>
        <div className='space-y-4'>

          <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3'>
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400'/>
              <input disabled={isGestInputOpen} type='text' placeholder='Para onde você vai?'className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'/>
            </div>

            <div className='flex items-center gap-2 '>
              <Calendar className='size-5 text-zinc-400'/>
              <input disabled={isGestInputOpen} type='text' placeholder='Quando?'className='bg-transparent text-lg placeholder-zinc-400 w-40 outline-none'/>
            </div>

            <div className='w-px h-6 bg-zinc-800'></div>

           {isGestInputOpen ? (
             <button onClick={closeGestInput} className='bg-zinc-900 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
             ALterar local/data
             <Settings2 className='size-5'/>
           </button>
           ):(
             <button onClick={openGestInput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
              Continuar
             <ArrowRight className='size-5'/>
           </button>
           )}
          </div>

          {isGestInputOpen ? (
            <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3'>
              <div className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className='size-5 text-zinc-400'/>
                <input type='text' placeholder='Quem estará na viagem?'className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'/>
              </div>

          

              <div className='w-px h-6 bg-zinc-800'></div>

              <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Confirmar viagem
                <ArrowRight className='size-5'/>
              </button>
            </div>
          ) : null}
          </div>

        <p className='text-sm text-zinc-500'>
        Ao planejar sua viagem pela plann.er você automaticamente concorda <br/>
        com nossos <a className='text-zinc-300 underline' href='#'>termos de uso</a> e <a className='text-zinc-300 underline' href='#'>políticas de privacidade.</a>
        </p>
      </div>
    </div>
    
  )
}


