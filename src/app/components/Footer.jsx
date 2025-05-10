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
                    <a href="https://codeforces.com/profile/sanchit.pahurkar" target='_blank'>CodeForces</a>
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

            {/* community */}
            <div className='flex flex-col'>
                <h3 className='font-semibold py-2'>Community</h3>
                <div className='flex flex-col gap-y-2'>
                    <a href="https://sanchitpahurkar.hashnode.dev/" target='_blank'>Hashnode</a>
                    <a href="https://medium.com/" target='_blank'>Medium</a>
                    <a href="https://medial.app/" target='_blank'>Medial</a>
                    <a href="https://www.bluelearn.in/community" target='_blank'>Bluelearn</a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
