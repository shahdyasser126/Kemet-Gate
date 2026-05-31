import logo from '../../assets/ODxQQ06NX4-sVcPCCHJA5Q@2k.webp'
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Destanitions', href: '#', current: false },
  { name: 'Gate', href: '#', current: false },
]



function NavBar  ()  {
  return (
<>
<div >
  <nav className='flex flex-row items-center justify-between bg-black  rounded-lg'>
<div className="logo flex items-center w-5/12 gap-4 ps-20">
  <img src={logo} alt="" className='w-auto h-16' />
  <a href='#' className='text-beige font-bold text-2xl font-adamina'>Kemet Gate</a>
</div>
<div className="flex flex-1 items-center justify-between text-blue-600 w-auto pe-80">
    <ul className="flex gap-8">
          {navigation.map((item) => (
            <li key={item.name}>
              <a href={item.href}  className="text-beige hover:text-gold duration-300">
                {item.name}
              </a>

            </li>
          ))}

        </ul>
</div>

<div className="flex flex-1 gap-8">
<button className='text-gold'><a href="/login">Login</a></button>
<button  className='text-beige bg-gold rounded-xl w-28 px-5 py-3'><a href="/register">Register</a></button>
</div>
  </nav>

</div>
</>


  )
}

export default NavBar