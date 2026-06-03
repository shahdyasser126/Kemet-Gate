import before from '../../assets/dd872145c092ee141cfb301da019b6cd.jpg'
import after from '../../assets/1818045fb6ee7b29ba02e245fb00fd48.jpg'

function Journey(){
    
    return(
        <>
        <section className="bg-gradient-to-b from-black/90 via-black to-black">
<div className="content p-40 text-center ">
    <h2 className="text-gold   font-serif text-5xl  font-medium text-center leading-relaxed">Two Journeys. One Story</h2>
    <p className="text-beige">Experience Egypt Before You Arrive , and Rediscover it when you stand among its wonders.</p>
<div className=" grid grid-cols-2 gap-72 m-auto pt-16">
 
         
              <div  className=" bg-white/5 backdrop-blur-sm rounded-2xl   border border-gold/30 transition-all duration-500 hover:border-gold/80 hover:scale-105">
                <img
                  alt='img'
                  src={before}
                  className="  rounded-lg bg-white w-full    object-cover group-hover:opacity-75"
                />
                  <div className="content    pb-5">
                <h3 className="mt-6 text-3xl font-adamina font-medium text-gold">
                  <a href='/'>
                    <span className=" " />
                  Before  Visit
                  </a>
                </h3>
                <p className=" text-lg  text-beige">Explore ancient Egypt from anywhere in the world. <br />
                Listen to immersive stories, discover hidden details, <br />
                and plan your journey before arriving.
                </p>
                </div> </div>

               <div  className=" bg-white/5 backdrop-blur-sm rounded-2xl   border border-gold/30  transition-all duration-500 hover:border-gold/80 hover:scale-105">
                <img
                  alt='img'
                  src={after}
                  className="  rounded-lg w-full bg-white object-cover group-hover:opacity-75 "
                />
                <div className="content pb-5">
                <h3 className="mt-6 text-3xl font-adamina font-medium text-gold">
                  <a href='/'>
                    <span className=" " />
                  During  Visit
                  </a>
                </h3>
                <p className="text-lg text-beige">When you arrive, the story changes. <br />
                Recieve location-based insights, uncover hidden facts, <br />
                and experience history where it happened
                </p>
             </div> </div>
         
       
          
</div>
</div>
        </section>
        </>
    )
}
export default Journey