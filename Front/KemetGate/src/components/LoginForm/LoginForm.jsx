import img from '../../assets/ChatGPT Image Jun 4, 2026, 11_30_10 PM.png'
import logo from '../../assets/ODxQQ06NX4-sVcPCCHJA5Q@2k.webp'
import { IoMailOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
function LoginForm(){

    return(
        <>
        <section>
     
        <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center p-10"
            style={{ backgroundImage: `url(${img})`, 
            }}>
<div className="absolute inset-0 bg-black/70"></div>


        <div className="bg-black/35 backdrop-blur-sm rounded-2xl  px-4  py-10 border m-auto border-gold/30 transition-all duration-500 hover:border-gold/80 ">
    <div className="logo flex items-center justify-center ">
      <img src={logo} alt="" className='w-auto  h-32' />
      <a href='#' className='text-beige font-bold text-3xl font-notoSerif'>Kemet Gate
        <br /> <span className='text-lg text-gold font-mono'>Unlock Egypt</span>
      </a>
     
    </div>
   
  <div className="welcome m-auto text-center">
      <h3 className="text-gold mt-3 font-adamina text-5xl">Welcome Back</h3>
   <p className="text-beige">Login To Continue Your Journey</p></div>
        
        <form   className='flex flex-col w-full  px-1 py-16'>
            <div className="relative w-96">
         <label className='text-white'>Email Address</label>
           <IoMailOutline className="absolute left-3 top-[48px] text-gold text-xl"/>
    <input type="email" name="email" id="" required  placeholder=' Enter Your Email' className='pl-10 bg-transparent border border-gold/20 mt-3 p-2 rounded-lg w-96 text-beige    placeholder:text-beige outline-1 -outline-offset-1 outline-none  focus:border-gold transition-all duration-300   '/>
 </div>

  <div className="relative w-96 mt-6"> 
  <label className='text-white '>Passwoed</label>
       <CiLock className="absolute left-3 top-[48px] text-gold text-xl"/>
         <input type="email" name="email" id=""  required placeholder='Enter Your Password' className='pl-10 bg-transparent border border-gold/20 mt-3 p-2 rounded-lg w-96 text-beige    placeholder:text-beige outline-1 -outline-offset-1 outline-none  focus:border-gold transition-all duration-300   '/>
</div>

    <div className="flex flex-row justify-between items-center mt-6">
      <div className="flex  items-center gap-3 ">
  <input type="checkbox" className=" h-5 w-5 accent-gold required "/>
<label className="text-beige cursor-pointer">
   Remember Me</label>
</div>
         <p className='text-gold'>Forgot Password?</p>      
   </div>               
<button type="submit" className="bg-gold text-black mt-6 py-3 px-6 rounded-lg w-full relative">
  <span className="block text-center font-medium">
    Login
  </span>
  
  <FaLongArrowAltRight className="absolute right-4 top-1/2 -translate-y-1/2" />
</button>
<div className='flex flex-row items-center m-auto mt-6'>
    <hr className='text-beige w-40 me-8'/> <p className='text-beige'>or</p>  <hr className='text-beige w-40 ms-8'/>
  </div>

  <button type="submit" className="bg-gold text-black mt-6 py-3 px-6 rounded-lg w-full  relative ">
 <FcGoogle className='absolute top-1/2 -translate-y-1/2 left-24 text-lg' />
   <span className="block text-center font-medium">
    Continue with Google
  </span>
</button>
  <p className='text-beige mt-6 text-center'>Don't have an account ?  <a href="/register" className='text-gold'>Register Here</a></p>
       </form>  
      </div>
        
        </div>
         </section>
        </>
    )
}
export default LoginForm