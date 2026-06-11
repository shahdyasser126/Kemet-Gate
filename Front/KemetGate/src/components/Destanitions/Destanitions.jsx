import luxor from '../../assets/670f0c567ed64abcd47cfe43dbdc3ed4.webp'
import Giza from '../../assets/d561cbb96fb806f40499179f04958f1c.jpg'
import simple from '../../assets/5bd310dd09a0798cf3eabf375bc7722f.jpg'
import Siwa from '../../assets/6105ce541d70ec7831734787fb85f3be.jpg'

function Destanitions(){
const Destanition = [
  {
    id: 1,
    name: 'Luxor',
    href: '#',
    imageSrc:  luxor ,
    imageAlt: "Luxor.",
    Rating: '4.9',
    description: 'Karnak Teample Complex',
  },
  {
    id: 2,
    name: 'Giza',
    href: '#',
    imageSrc:  Giza ,
    imageAlt: "Giza.",
   Rating: '4.7',
    description: 'The Great pyramides ',
  },
  {
    id: 3,
    name: 'Abu Simbel',
    href: '#',
    imageSrc:  simple ,
    imageAlt: "abu simbel.",
    Rating: '4.5',
    description: 'The majesty of Ramses',
  },
  {
    id: 4,
    name: 'Siwa',
    href: '#',
    imageSrc:  Siwa ,
    imageAlt: "Siwa.",
     Rating: '4.8',
    description: 'The hidden Oasis of Egypt',
  },
]


    return(
        <>
        <div className="bg-gradient-to-b from-black/90 via-black to-black">
      <div className='p-40 flex flex-col items-center'>
        <h2 className="text-gold  font-serif text-5xl  font-medium text-center">Explore Egypt Most Iconic Places</h2>

        <div className="mt-16 grid grid-cols-4 gap-10  ">
          {Destanition.map((destanitionn) => (
            <div key={destanitionn.id} className="group relativetransition-all duration-500 hover:scale-105">
              <img
                alt={destanitionn.imageAlt}
                src={destanitionn.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex flex-col justify-between px-8">
              <div className="flex gap-3 ">
                <i class="bi bi-geo-alt"style={{color:"gold",fontSize:"18px"}}></i>
                <span className='text-gold text-lg'>{destanitionn.name}</span>
                </div> 
               
                <p className="text-xl font-medium text-beige">{destanitionn.description}</p>
                <div className="flex gap-3 mt-3">
                <i class="bi bi-star-fill"style={{color:"gold",fontSize:"18px"}}></i>
                <span className='text-gold text-lg'>{destanitionn.Rating}</span>
                </div> 
             </div>

            </div>
          ))}
        </div>
       
            <button className='bg-gold text-black p-2 font-semibold transition-all duration-500 w-60 mt-14 rounded hover:bg-gold/70'>
            <a href="/explore"> All Destanitions</a></button>
      
      </div>
    </div>
        
        </>
    )
}
export default Destanitions