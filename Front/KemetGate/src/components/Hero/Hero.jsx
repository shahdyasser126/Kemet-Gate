import hero from '../../assets/photo-1562679299-266edbefd6d7.jpg'
import logo from '../../assets/ODxQQ06NX4-sVcPCCHJA5Q@2k.webp'
import img from '../../assets/d89125a1-4b10-4b66-9042-191c48a75029.jpg'

export const Hero = () => {
  return (
<>
<section>
  <div className="relative min-h-screen bg-cover bg-center flex items-center"
    style={{ backgroundImage: `url(${img})`, 
    }}>
    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative max-w-7xl mx-auto px-6 ">
      <div className="max-w-2xl items-center text-center ">
     <h1 className="text-gold font-notoSerif font-medium leading-tight text-5xl md:text-7xl lg:text-8xl">
       The Gateway
        <br />
        to Ancient Egypt
        </h1>

<p className="text-beige mt-6 text-lg md:text-xl leading-relaxed">
    Experience Egypt's timeless wonders through immersive virtual tours before stepping into history yourself.
       
   </p>
   
   <div className="flex  flex-row gap-72 mt-10 items-center">
   <button className="bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition">
   Start Your Journey
   </button>
   
   <button className="border border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-black transition">
   Watch Video
   </button>
   </div>
   </div>
       </div>
  </div>
</section>
</>
  )
}
