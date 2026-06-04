import img from '../../assets/ChatGPT Image Jun 5, 2026, 12_20_50 AM.png'
import logo from '../../assets/ODxQQ06NX4-sVcPCCHJA5Q@2k.webp'
import { IoMailOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
function RegisterForm(){
 
  const [showPassword, setShowPassword] = useState(false);
 const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return(
        <>
        <section>
     
        <div className="relative w-full min-h-screen bg-no-repeat bg-cover bg-center flex items-center p-10"
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
      <h3 className="text-gold mt-3 font-adamina text-4xl">Create Your Account</h3>
   <p className="text-beige">Start Your Journey to ancient Egypt</p></div>
        
        <form   className='flex flex-col w-full  px-1 py-16'>
          <div className="relative w-96">
         <label className='text-white'>Full Name</label>
           <FaRegUser className="absolute left-3 top-[48px] text-gold text-xl"/>
    <input type="text" name="text" id="" required  placeholder=' Enter Your Name' className='pl-10 bg-transparent border border-gold/20 mt-3 p-2 rounded-lg w-96 text-beige    placeholder:text-beige outline-1 -outline-offset-1 outline-none  focus:border-gold transition-all duration-300   '/>
 </div>
            <div className="relative w-96 mt-6">
         <label className='text-white'>Email Address</label>
           <IoMailOutline className="absolute left-3 top-[48px] text-gold text-xl"/>
    <input type="email" name="email" id="" required  placeholder=' Enter Your Email' className='pl-10 bg-transparent border border-gold/20 mt-3 p-2 rounded-lg w-96 text-beige    placeholder:text-beige outline-1 -outline-offset-1 outline-none  focus:border-gold transition-all duration-300   '/>
 </div>

  <div className="relative w-96 mt-6"> 
  <label className='text-white '>Passwoed</label>
       <CiLock className="absolute left-3 top-[48px] text-gold text-xl"/>
        
         <input type={showPassword ? "text" : "password"} name="password" id=""  required placeholder='Enter Your Password' className='pl-10 bg-transparent border border-gold/20 mt-3 p-2 rounded-lg w-96 text-beige    placeholder:text-beige outline-1 -outline-offset-1 outline-none  focus:border-gold transition-all duration-300   '/>

<button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-[48px] text-gold text-xl"
      >
        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
      </button>
</div>

<div className="relative w-96 mt-6"> 
  <label className='text-white '>Confirm Passwoed</label>
       <CiLock className="absolute left-3 top-[48px] text-gold text-xl"/>
         <input  type={showConfirmPassword ? "text" : "password"} name="confirmPassword" id=""  required placeholder='Enter Your Password' className='pl-10 bg-transparent border border-gold/20 mt-3 p-2 rounded-lg w-96 text-beige    placeholder:text-beige outline-1 -outline-offset-1 outline-none  focus:border-gold transition-all duration-300   '/>
<button
  type="button"
  onClick={() =>
    setShowConfirmPassword(!showConfirmPassword)  }
        className="absolute right-3 top-[48px] text-gold text-xl"
>
        {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
      </button>
</div>
    
      <div className="flex  items-center gap-3  mt-6">
  <input type="checkbox" className=" h-5 w-5 accent-gold required "/>
<label className="text-beige cursor-pointer text-xs">
   I agree to the <span className='text-gold'>Terms & Conditions and Privacy Policy</span> </label>
</div>
              
<button type="submit"   className="bg-gold text-black mt-6 py-3 px-6 rounded-lg w-full relative">
  <span className="block text-center font-medium">
    Register
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
  <p className='text-beige mt-6 text-center'>Already have an account ?  <a href="/login" className='text-gold'>Login Here</a></p>
       </form>  
      </div>
        
        </div>
         </section>
        </>
    )
}
export default RegisterForm