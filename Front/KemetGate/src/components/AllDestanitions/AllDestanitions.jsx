
import luxor from '../../assets/670f0c567ed64abcd47cfe43dbdc3ed4.webp'
import Giza from '../../assets/d561cbb96fb806f40499179f04958f1c.jpg'
import simple from '../../assets/5bd310dd09a0798cf3eabf375bc7722f.jpg'
import Siwa from '../../assets/6105ce541d70ec7831734787fb85f3be.jpg'
function AllDestanitions(){

const Destanition = [
  {
    id: 1,
    name: 'Luxor , EGYPT',
    href: '#',
    imageSrc:  luxor ,
    imageAlt: "Luxor.",
    details:'Explore the last remaining wonder of the ancient world' ,

    description: 'Karnak Teample Complex',
  },
  {
    id: 2,
    name: 'Giza , EGYPT',
    href: '#',
    imageSrc:  Giza ,
    imageAlt: "Giza.",
   details:'Explore the last remaining wonder of the ancient world' ,

    description: 'The Great pyramides ',
  },
  {
    id: 3,
    name: 'Abu Simbel , EGYPT',
    href: '#',
    imageSrc:  simple ,
    imageAlt: "abu simbel.",
  details:'Explore the last remaining wonder of the ancient world' ,
    description: 'The majesty of Ramses',
  },
  {
    id: 4,
    name: 'Siwa , EGYPT',
    href: '#',
    imageSrc:  Siwa ,
    imageAlt: "Siwa.",
      details:'Explore the last remaining wonder of the ancient world' ,

    description: 'The hidden Oasis of Egypt',
  },
]

    return(
        <>
        <div className="bg-gradient-to-b from-black/90 via-black to-black">
      <div className='p-40'>
        <h2 className="text-gold  font-serif text-5xl  font-medium text-center"> Egypt Iconic Places</h2>

        <div className="mt-16 grid grid-cols-4 gap-10   ">
          {Destanition.map((destanitionn) => (
            <div key={destanitionn.id} className=" group relativetransition-all duration-500 hover:scale-105">
              <img
                alt={destanitionn.imageAlt}
                src={destanitionn.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-1 flex flex-col justify-between bg-gradient-to-b from-black/90 via-black to-white/5 py-2 px-4 rounded h-40">
              <p className="text-xl font-medium text-beige w-60">{destanitionn.description}</p>  
              <div className="flex gap-3 h-12 mt-2  ">
                <i class="bi bi-geo-alt"style={{color:"gold",fontSize:"18px"}}></i>
                <span className='text-gold text-lg'>{destanitionn.name}</span>
                </div> 
                <p className="text-lg font-normal text-beige w-64">{destanitionn.details}</p>
                {/* <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={destanitionn.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {destanitionn.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{destanitionn.location}</p>
                </div> */}
              
            
             </div>

            </div>
          ))}
        </div>
      </div>
    </div>
        
        </>
    )
}
export default AllDestanitions