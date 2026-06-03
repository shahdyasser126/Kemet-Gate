
function Features(){
    return(
        <>
        <section className="bg-gradient-to-b from-black/90 via-black to-black"  >

            <div className="content p-40 ">
                <h2 className="text-gold  font-serif text-5xl  font-medium text-center">Experience Egypt Like Never Before</h2>
            <div className=" grid grid-cols-3 gap-8 m-auto pt-16">
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-gold/30 transition-all duration-500 hover:border-gold/80 hover:scale-105">
    <i class="bi bi-globe " style={{color:"gold", fontSize:"50px"}}></i>
   <h3 className="text-beige mt-3 font-adamina text-3xl">360° Virtual Tours</h3>
   <p className="text-zinc-600">Immerse yourself in stunning panoramic views of Egypt's most iconic locations</p>
</div>
<div className="bg-white/5 backdrop-blur-sm p-12  rounded-2xl border border-gold/30 transition-all duration-500 hover:border-gold/80 hover:scale-105">
    <i class="bi bi-headphones " style={{color:"gold", fontSize:"50px"}}></i>
   <h3 className="text-beige mt-3 font-adamina text-3xl">Audio Storytelling</h3>
   <p className="text-zinc-600">Listen to captivating narratives that bring ancient history to life</p>
</div>
<div className="bg-white/5 backdrop-blur-sm p-12  border border-gold/30 rounded-2xl transition-all duration-500 hover:border-gold/80 hover:scale-105">
    <i class="bi bi-stars " style={{color:"gold", fontSize:"50px"}}></i>
   <h3 className="text-beige mt-3 font-adamina text-3xl">Adaptive Story Experience</h3>
   <p className="text-zinc-600">Stories change based on whether you're visiting virtually or in person</p>
</div>
            </div></div>
        </section>
        </>
    )
}
export default Features