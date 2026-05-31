import hero from '../../assets/photo-1562679299-266edbefd6d7.jpg'
import logo from '../../assets/ODxQQ06NX4-sVcPCCHJA5Q@2k.webp'

export const Hero = () => {
  return (
<>
 <section>
<div
  className=" bg-center bg-cover"
  style={{
    backgroundImage: `url(${hero})`,
  }}
>
  <div className="min-h-screen bg-black/70 flex items-center justify-center ">
   <div className="details flex flex-col text-center items-center justify-center ">
    <h1 className="text-gold text-7xl font-notoSerif font-semibold ">
     The Gateway <br /> to Ancient Egypt
    </h1>
 <p className='text-beige mt-1 text-lg'>Experience Egypt's timeless wonders through immersive virtual tours before stepping into history yourself</p>
</div>  </div>
</div>




 </section>
</>
  )
}
