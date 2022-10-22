import React from 'react'

const Footer = () => {
    const contact = [
        {name: "Call Support", details: "+91 99108 91864"},
        {name: "Email Support", details: "comitcon2021@gmail.com"},
        {name: "Location", details: "MRIIRS Campus"}
    ]   
  return (
    <div className='w-full bg-[#3FBA96] mt-14 rounded-tl-[50px] rounded-tr-[50px]'>
        <div className='text-gray-600 flex md:flex-row flex-col items-center leading-10 justify-center md:gap-80 gap-10 text-2xl'>
            {
                contact?.map((contact, i) =>(
                    <p key={i}>{contact?.name}<br />{contact?.details}</p>
                ))
            }
        </div>
    </div>
  )
}

export default Footer