import React from 'react'

export default function AboutMe() {
  return (
    <div className=' block w-full md:w-[83%] mx-auto  md:flex '>
      <div className="image w-full md:w-[40%] bg-contain bg-center">
        <img src="https://res.cloudinary.com/dlcqoiyb1/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1697293465/IMG_0913_hceczq.jpg" alt="profile photo" className=' h-[500px] md:h-[650px] ' />
      </div>

      <div className="text w-full md:w-[60%] ">
        <h1 className=' font-extrabold text-[60px] mb-8 italic '>About Me <hr /></h1>
        

        <h1 className=' font-extrabold text-[40px]  '>Michael Odartei Lamptey</h1>
        <h2 className=' mb-7 font-extrabold text-[28px] '>Software Developer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis quo obcaecati facilis distinctio ullam quidem ipsa quos sunt nam. Enim laborum fuga asperiores cupiditate. Ratione fugit ipsum voluptatem placeat ad eaque? At veniam dolorem natus itaque dicta, autem incidunt delectus, quas saepe magni eum accusantium. Exercitationem officiis dolore odit!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste omnis suscipit voluptates aut laborum molestias, nam ea error dolorem aliquid corporis, eum alias cumque reprehenderit maxime expedita consequuntur numquam dolor ad? <br /> <br />

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis quo obcaecati facilis distinctio ullam quidem ipsa quos sunt nam. Enim laborum fuga asperiores cupiditate. Ratione fugit ipsum voluptatem placeat ad eaque? At veniam dolorem natus itaque dicta, autem incidunt delectus, quas saepe magni eum accusantium. Exercitationem officiis dolore odit!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste omnis suscipit voluptates aut laborum molestias, nam ea error dolorem aliquid corporis, eum alias cumque reprehenderit maxime expedita consequuntur numquam dolor ad? Maiores ex laboriosam facere sint vel consequuntur corporis qui itaque, libero tempore, soluta eaque atque magnam quidem placeat veniam, harum natus. Dolorem unde doloribus enim distinctio autem ea ratione, atque, labore quasi sequi quis quia suscipit vitae quos repellat.
        </p>
      </div>
    </div>
  )
}
