import React from 'react'

const Partners = () => {
    const partners = [
        {link: "images/aws.png"},
        {link: "images/oracle.png"},
        {link: "images/ibm.png"},
        {link: "images/microsoft.png"},
        {link: "images/infosis1.png"},
      ]
  return (
    <div className="py-10">
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold">
            Academic <span className="text-[#3FBA96]">Partners</span>
          </h3>
          <div className="flex md:flex-row flex-col-reverse item-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
              <div className="mt-9 w-[150px] h-[40px] gap-12 flex">
                  {
                    partners?.map((partner,i) =>(
                      <img src={partner?.link} alt="Academic Partners"/>
                    ))
                  }
              </div>
          </div>
        </div>
      </div>
  )
}

export default Partners