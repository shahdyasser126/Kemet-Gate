import { RiGlassesFill } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import { IoIosUnlock } from "react-icons/io";


function Works(){

    return(

        <>
         <section className="bg-gradient-to-b from-black/90 via-black to-black"  >

            <div className="content p-40">
                <h2 className="text-gold  font-serif text-5xl  font-medium text-center">Your Journey in 4 Steps</h2>
            <div className=" grid grid-cols-4 gap-20 m-auto pt-16">
<div className=" backdrop-blur-sm rounded-2xl p-12 flex flex-col items-center  transition-all duration-500 hover:border-gold/80 hover:scale-105 ">
  <RiGlassesFill style={{color:"gold", fontSize:"70px" ,border:"1px solid gold",borderRadius:"55px",padding:"15px"}} />  
   <h3 className="text-gold mt-5 font-adamina text-3xl">Step 1</h3>
   <p className="text-beige text-center mt-2">Explore Virtually</p>
</div> 
<div className="  backdrop-blur-sm p-12  rounded-2xl  flex flex-col items-center  transition-all duration-500 hover:border-gold/80 hover:scale-105">
   <FaHeadphones  style={{color:"gold", fontSize:"70px" ,border:"1px solid gold",borderRadius:"55px",padding:"15px"}} />  
   <h3 className="text-gold mt-5 font-adamina text-3xl">Step 2</h3>
   <p className="text-beige text-center mt-2">Listen to The Story</p>
</div>
<div className="  backdrop-blur-sm p-12  flex flex-col items-center    rounded-2xl transition-all duration-500 hover:border-gold/80 hover:scale-105">
    <RiTelegram2Fill style={{color:"gold", fontSize:"70px" ,border:"1px solid gold",borderRadius:"55px",padding:"15px"}} />  
   <h3 className="text-gold mt-5 font-adamina text-3xl">Step 3</h3>
   <p className="text-beige text-center mt-2">Visit Egypt</p></div>
<div className="  backdrop-blur-sm p-12 flex flex-col items-center   rounded-2xl transition-all duration-500 hover:border-gold/80 hover:scale-105">
    <IoIosUnlock style={{color:"gold", fontSize:"70px" ,border:"1px solid gold",borderRadius:"55px",padding:"15px"}} />  
   <h3 className="text-gold mt-5 font-adamina text-3xl">Step 4</h3>
   <p className="text-beige text-center mt-2">Unlock The Live Experience</p></div>
 
            </div></div>
        </section>
        </>
    )
}
export default Works