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
            <h1 className='text-9xl font-bold bebas-font text-center text-black '>
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
      {/* Tech Stack */}
      <section className="flex flex-col items-center gap-y-5">
        <h1 className="lg:py-16 py-10  text-4xl font-bold text-gray-800">Tech Stack</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-20 gap-y-10 md:gap-8 pb-16">
          <img
            src="/assets/py.png"
            className="h-20 sm:h-24 md:h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
            alt="Python"
          />
          <img
            src="/assets/java.png"
            className="h-20 sm:h-24 md:h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
            alt="Java"
          />
          <img
            src="/assets/cpp.png"
            className="h-20 sm:h-24 md:h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
            alt="C++"
          />
          <img
            src="/assets/js.png"
            className="h-20 sm:h-24 md:h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
            alt="JavaScript"
          />
          <img
            src="/assets/tailwind.png"
            className="h-20 sm:h-24 md:h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
            alt="Tailwind CSS"
          />
          <img
            src="/assets/discord.png"
            className="h-20 sm:h-24 md:h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
            alt="Discord"
          />
          <img
            src="/assets/c.png"
            className="h-20 sm:h-24 md:h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
            alt="C"
          />
          <img
            src="/assets/figma.png"
            className="h-20 sm:h-24 md:h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
            alt="Figma"
          />
          <img
            src="/assets/html.png"
            className="h-20 sm:h-24 md:h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
            alt="HTML"
          />
          <img
            src="/assets/github black.png"
            className="h-20 sm:h-24 md:h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
            alt="GitHub"
          />
          <img
            src="/assets/vscode.png"
            className="h-20 sm:h-24 md:h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
            alt="VS Code"
          />
          <img
            src="/assets/windows.png"
            className="h-20 sm:h-24 md:h-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
            alt="Windows"
          />
        </div>
      </section>
      <Footer/>
    </div>
  );
}
