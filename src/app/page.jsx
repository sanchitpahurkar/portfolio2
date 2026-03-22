'use client'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useTheme } from "next-themes"
import ContactForm from './components/ContactForm';
import { useEffect, useState } from 'react';

export default function Home() {

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <div className=''>
        <section
         className='h-screen custom-bg flex items-center justify-center'
        >
            <div className='flex flex-col items-center justify-center animate-fade-up animate-once animate-delay-500 animate-ease-in-out'>
              <h1 className='text-9xl font-bold bebas-font text-center '>
                <span className='text-white'>HELLO </span><span className='text-white'>WORLD!</span>
              </h1>
              <h2 className='text-6xl font-bold bebas-font text-white'>
                I am <span className='gradient-text'>Sanchit</span>
              </h2>
              <h2 className='text-4xl font-bold bebas-font text-white '>
                <span className='gradient-peach-pink'>JAVA</span> | <span className='gradient-peach-pink'>Web dev</span> | <span className='gradient-peach-pink'>Cloud</span>
              </h2>
            </div>
        </section>
        {/* Tech Stack */}
        <section className="flex flex-col items-center gap-y-5 bg-[#f1f5f9] dark:bg-[#1a1a2e]">
          <div className='lg:py-16 py-10 flex flex-col items-center gap-y-2'>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Tech Stack</h1>
            <div className='w-28 h-1 rounded-full bg-gray-800 dark:bg-gray-200'></div>
          </div>

          {/* Dynamic Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-20 gap-y-10 md:gap-16 pb-16">
            {[
              { src: "/assets/cpp.png", alt: "C++" },
              { src: "/assets/py.png", alt: "Python" },
              { src: "/assets/tensorflow.png", alt: "Tensorflow" },
              { src: "/assets/js.png", alt: "JavaScript" },
              { src: "/assets/tailwind.png", alt: "Tailwind CSS" },
              { src: "/assets/react.webp", alt: "ReactJs" },
              { src: "/assets/aws.png", alt: "AWS Cloud" },
              { src: "/assets/flask.png", alt: "Flask" },
              { src: "/assets/mysql.png", alt: "mySQL" },
              { src: "/assets/github black.png", alt: "GitHub" },
              { src: "/assets/vscode.png", alt: "VS Code" },
              { src: "/assets/figma.png", alt: "Figma" },
            ].map((tech, idx) => (
              <img
                key={idx}
                src={tech.src}
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
                alt={tech.alt}
              />
            ))}
          </div>
        </section>  
        <ContactForm/>
      </div>
    );
  }

  return (
    <div className=''>
      <section
       className='h-screen custom-bg flex items-center justify-center'
      >
          <div className='flex flex-col items-center justify-center animate-fade-up animate-once animate-delay-500 animate-ease-in-out'>
            <h1 className='text-9xl font-bold bebas-font text-center '>
              <span className='text-white'>HELLO </span><span className='text-white'>WORLD!</span>
            </h1>
            <h2 className='text-6xl font-bold bebas-font text-white'>
              I am <span className='gradient-text'>Sanchit</span>
            </h2>
            <h2 className='text-4xl font-bold bebas-font text-white '>
              <span className='gradient-peach-pink'>JAVA</span> | <span className='gradient-peach-pink'>Full-Stack</span> | <span className='gradient-peach-pink'>Cloud</span>
            </h2>
          </div>
      </section>
      {/* Tech Stack */}
      <section className="flex flex-col items-center gap-y-5 bg-[#f1f5f9] dark:bg-[#1a1a2e]">
        <div className='lg:py-16 py-10 flex flex-col items-center gap-y-2'>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Tech Stack</h1>
          <div className='w-28 h-1 rounded-full bg-gray-800 dark:bg-gray-200'></div>
        </div>

        {/* Dynamic Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-20 gap-y-10 md:gap-16 pb-16">
          {[
            { src: "/assets/java.png", alt: "Java" },
            { src: "/assets/cpp.png", alt: "C++" },
            { src: "/assets/mysql.png", alt: "mySQL" },
            { src: "/assets/js.png", alt: "JavaScript" },
            { src: "/assets/tailwind.png", alt: "Tailwind CSS" },
            { src: "/assets/springboot.png", alt: "Spring Boot" },
            { src: "/assets/react.webp", alt: "ReactJs" },
            { 
              src: "/assets/aws.png",
              darkSrc: "/assets/awsdarksq.png",
              alt: "AWS Cloud" 
            },
            { 
              src: "/assets/docker.webp",
              alt: "Docker" 
            },
            { 
              src: "/assets/github black.png",
              darkSrc: "/assets/github.png",
              alt: "GitHub" 
            },
            { src: "/assets/vscode.png", alt: "VS Code" },
            { src: "/assets/postman.png", alt: "Postman" },
          ].map((tech, idx) => (
            <img
              key={idx}
              src={resolvedTheme === "dark" && tech.darkSrc ? tech.darkSrc : tech.src}
              className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms]"
              alt={tech.alt}
            />
          ))}
        </div>
      </section> 
      <ContactForm/>
    </div>
  );
}
