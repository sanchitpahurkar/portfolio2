import React from 'react'

const Footer = () => {

    

  return (
    <div>
        <footer className="bg-[#1a1a2e] text-white flex flex-row items-center justify-center py-3 bottom-0">
            <div className=" flex flex-row gap-x-3 py-4">
                {[
                { href: "https://leetcode.com/u/sanchit_pahurkar/", src: "/assets/leetcodelogo.webp", alt: "leetcode"},
                { href: "https://www.codechef.com/users/sanchit_p23", src: "/assets/codecheflogo.jpeg", alt: "codechef" },
                { href: "https://github.com/sanchitpahurkar", src: "/assets/github.png", alt: "github" },
                { href: "https://instagram.com/sanchit_p23", src: "/assets/instagram.png", alt: "Instagram" },
                { href: "https://www.linkedin.com/in/sanchit-pahurkar/", src: "/assets/linkedin.png", alt: "LinkedIn" },
                { href: "mailto:sanchit.pahurkar@gmail.com", src: "/assets/email.png", alt: "ReactJs" }
                ].map((tech, idx) => (
                <a href={tech.href} target='_blank'>
                    <img
                        key={idx}
                        src={tech.src}
                        className="h-8 w-8 sm:h-8 sm:w-8 md:h-8 md:w-8 hover:animate-pulse hover:animate-once hover:animate-duration-[1000ms] rounded-full"
                        alt={tech.alt}
                    />
                </a>
                ))}
            </div>   
        </footer>
    </div>
  )
}

export default Footer
