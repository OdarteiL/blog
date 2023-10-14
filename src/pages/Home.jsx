import { BackgroundBlogCard } from '../components/BackgroundBlogCard'
import { HorizontalCard } from '../components/HorizontalCard';

export default function Home() {
  return (
    <>
      <div className=' mt-8 '>
        <BackgroundBlogCard />
        <br />
        <hr />
      </div>
      
      <div className='my-8 w-[83%] mx-[8.5%] font-extrabold text-[48px] '>
        <h1 className='underline underline-offset-8'>Top News</h1>
      </div>
      <div className='grid grid-cols-1 w-full md:grid-cols-2 md:w-[83%] mx-[8.5%] gap-4 my-8 '>
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </div>
      
    </>
  )
}
