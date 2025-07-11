import React from 'react'

const Footer = () => {
  return (
    <div className='text-[#737373] md:px-10 md:pt-10'>
        <div className='py-20'>
            <p>Developed by Haroon Khan!</p>
            <p>Read about Netflix TV shows and Movies!</p>
        </div>

        <p className='pb-5'>Questions? Contact us.</p>

        <div className='grid grid-cols-2 md:grid-cols-4 text-sm pb-10 max-w-5xl'>
            <ul className='flex flex-col space-y-2'>
                <li>FAQ</li>
                <li>Inverstor relations</li>
                <li>Privacy</li>
                <li>Speed test</li>
            </ul>

            <ul className='flex flex-col space-y-2'>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Legal notice</li>
            </ul>

            <ul className='flex flex-col space-y-2'>
                <li>Account</li>
                <li>Ways to watch</li>
                <li>Corporate information</li>
                <li>Only on Netflix</li>
            </ul>

            <ul className='flex flex-col space-y-2'>
                <li>Media center</li>
                <li>Terms of use</li>
                <li>Contact us</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer