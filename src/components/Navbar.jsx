import React from 'react'

const Navbar = () => {
  return (
    <>
    <section className=' container pt-4 '>
        <main className='flex justify-between'>

            <div>
                logo
            </div>

            <div className=' border border-black'>
                <input  type="text" />

            </div>

            <div>
            <ul className='flex gap-4'>
               
                <li>
                    About
                </li>
                <li>
                    Blog
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Host your hostel
                </li>
                <li>
                    
                </li>
              
            </ul>
            </div>
          

        </main>
    </section>


    </>
  )
}

export default Navbar