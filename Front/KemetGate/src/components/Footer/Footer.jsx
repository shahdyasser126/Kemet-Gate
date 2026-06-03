import logo from '../../assets/ODxQQ06NX4-sVcPCCHJA5Q@2k.webp'




function NavBar  ()  {
  return (
<>
<div >
  <footer className='flex flex-col items-center  bg-black text-center   p-3'>
<div className="logo flex items-center  ">
  <img src={logo} alt="" className='w-auto  h-20' />
  <a href='#' className='text-beige font-bold text-2xl font-adamina'>Kemet Gate</a>
</div>
<div className="paragraph text-center m-auto">
<p className='text-gold text-center'>Unlock Egypt. Experience History Before You Travel.</p>
<span className='text-beige'>© 2026 Kemet Gate. All rights reserved.</span>
</div>
 
  </footer>
</div>
 
</>


  )
}

export default NavBar