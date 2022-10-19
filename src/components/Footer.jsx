import React from 'react'

const Footer = () => {
    const contact = [
        {name: "Call Support", details: "+91 9810487182"},
        {name: "Email Support", details: "comitcon2021@gmail.com"},
        {name: "Location", details: "MRIIRS Campus"}
    ]   
  return (
    <div className='w-full bg-[#3FBA96] mt-14 rounded-tl-[50px] rounded-tr-[50px]'>
        <div className='text-gray-600  flex items-center justify-center gap-80  text-2xl'>
            {
                contact?.map((contact, i) =>(
                    <p key={i}>{contact?.name}</p>
                ))
            }
        </div>
        <div className='text-gray-600  flex items-center justify-center gap-56  text-2xl'>
            {
                contact?.map((contact,i) =>(
                    <p>{contact?.details}</p>
                ))
            }
        </div>
    </div>
  )
}

export default Footer