import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white text-black flex flex-row  justify-center md:gap-x-40 gap-x-10 py-3 bottom-0">
            {/* code profiles */}
            <div className='flex flex-col'>
                <h3 className='font-semibold py-2'>Code Profiles</h3>
                <div className='flex flex-col gap-y-2'>
                    <a href="https://leetcode.com/u/sanchit_pahurkar/" target='_blank'>LeetCode</a>
                    <a href="https://www.codechef.com/users/sanchit_p23" target='_blank'>CodeChef</a>
                    <a href="https://codolio.com/profile/sanchit_pahurkar" target='_blank'>Codolio</a>
                    <a href="https://www.geeksforgeeks.org/user/sanchitpahurkar/" target='_blank'>GeerkForGeeks</a>
                </div>
            </div>

            {/* Socials */}
            <div className='flex flex-col'>
                <h3 className='font-semibold py-2'>Socials</h3>
                <div className='flex flex-col gap-y-2'>
                    <a href="https://github.com/sanchitpahurkar" target='_blank'>Github</a>
                    <a href="https://www.linkedin.com/in/sanchit-pahurkar/" target='_blank'>Linkedin</a>
                    <a href="https://www.instagram.com/sanchit_p23/" target='_blank'>Instagram</a>
                    <a href="https://x.com/PahurkarSanchit" target='_blank'>Twitter/X</a>
                </div>
            </div>

        </footer>
    </div>
  )
}

export default Footer
