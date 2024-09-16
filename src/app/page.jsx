import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div className=''>
      <Navbar/>
      <section
       className='h-screen custom-bg flex items-center justify-center'
      >
          <div className='flex flex-col items-center justify-center animate-fade-up animate-once animate-delay-500 animate-ease-in-out'>
            <h1 className='text-9xl font-bold bebas-font text-black '>
              HELLO WORLD!
            </h1>
            <h2 className='text-6xl font-bold bebas-font text-black '>
              I am Sanchit
            </h2>
            <h2 className='text-4xl font-bold bebas-font text-black '>
              DSA | Web dev | ML
            </h2>
          </div>
      </section>
      {/* tech stack */}
      <section className='flex flex-col items-center gap-y-5'>
          <h1 className='py-10 font-semibold text-4xl'>
            Tech Stack
          </h1> 
          <div className='grid grid-cols-4 gap-x-28 gap-y-10 pb-16'>
              <img src="/assets/py.png" className='h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]' alt="" />
              <img src="/assets/java.png" className='h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]' alt="" />
              <img src="/assets/cpp.png" className='h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]' alt="" />
              <img src="/assets/js.png" className='h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]' alt="" />
              <img src="/assets/tailwind.png" className='h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]' alt="" />
              <img src="/assets/discord.png" className='h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]' alt="" />
              <img src="/assets/c.png" className='h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]' alt="" />
              <img src="/assets/figma.png" className='h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]' alt="" />
              <img src="/assets/html.png" className='h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]' alt="" />
              <img src="/assets/github.png" className='h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]' alt="" />
              <img src="/assets/vscode.png" className='h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]' alt="" />
              <img src="/assets/windows.png" className='h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]' alt="" />
          </div>
      </section>
      <Footer/>
    </div>
  );
}
