import img from '../../assets/Gemini_Generated_Image_rmwjocrmwjocrmwj.png'
import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
function ExploreHero(){
  
const Region = [
  {
    id: 1,
    name: 'All Regions',
     },
  {
    id: 2,
    name: 'Giza',
    },
  {
    id: 3,
    name: 'Luxor',
     },
  {
    id: 4,
    name: 'Abu Simbel',
    },
  {
    id: 5,
    name: 'Siwa',
    },
  
]
const Categories = [
 {  id: 1,
    name: 'All Categories',
    }, 
    {
    id: 2,
    name: 'Historical ',
     },
  {
    id: 3,
    name: 'Adveture',
    },
  {
    id: 4,
    name: 'Relaxing',
     },
   
  
  
  
]
const [selected, setSelected] = useState(Region[0])
const [choose, setChoose] = useState(Categories[0])
  'use client'
    return(
        <>
        <section>
          <div className="relative    bg-cover bg-center flex items-center p-32"
            style={{ backgroundImage: `url(${img}) `, 
            }}>
           <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/70 to-black/40"></div> 
            <div className="relative">
              <div className="  items-center text-left ">
             <h1 className="text-gold font-notoSerif font-bold leading-tight text-7xl">
            Eplore Egypt 
            
                </h1>
                <p className="text-beige font-notoSerif font-medium leading-tight text-5xl">Like Never Before</p>
        <div className='flex flex-row items-center m-auto mt-6'>
   <hr className="h-[2px] border-0 bg-gradient-to-r from-black via-gold/50 to-gold w-40 me-5" /> <p className='text-gold text-4xl'>☥</p>  <hr className="h-[2px] ms-5 border-0 bg-gradient-to-l from-black via-gold/50 to-gold w-40" />
  </div>
        <p className="text-beige mt-6 text-lg   leading-relaxed w-[380px]">
           Discover ancient Wonders,Listen to their stores ,
           and perpare for a journey throw time.
               
           </p>
           
           </div>
               </div>
   <div className='absolute left-[600px] top-52   bg-black/40 border border-gold flex flex-row items-center justify-between mt-56 p-3 rounded-2xl gap-12'>
      <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-transparent   py-1.5 pr-8 pl-12 text-left text-beige  border border-gold/30 ">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
          
            <span className="block truncate">{selected.name}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-transparent  py-1 text-beige shadow-lg border border-gold/45 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {Region.map((region) => (
            <ListboxOption
              key={region.id}
              value={region}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
        
                <span className="ml-3 block text-beige truncate font-normal group-data-selected:font-semibold">{region.name}</span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gold group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>

          <Listbox value={choose} onChange={setChoose}>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-transparent   py-1.5 pr-8 pl-12 text-left text-beige  border border-gold/30 ">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
          
            <span className="block truncate">{choose.name}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-transparent  py-1 text-beige shadow-lg border border-gold/45 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {Categories.map((ccategorie) => (
            <ListboxOption
              key={ccategorie.id}
              value={ccategorie}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
        
                <span className="ml-3 block text-beige truncate font-normal group-data-selected:font-semibold">{ccategorie.name}</span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gold group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
   </div>

          </div>
        </section>
        </>
    )
}

export default ExploreHero