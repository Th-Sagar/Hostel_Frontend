import React from 'react'



const Card = () => {


    const imagesDetails=[
        {
            img:"/places/anamnagar.jpg",
            title:"Anamnagar",
            link:"/places/anamnagar"
        },  {
            img:"/places/baneshwor.jpg",
            title:"Baneshwor",
            link:"/places/baneshwor"
        },  {
            img:"/places/bhaktapur.jpg",
            title:"Bhaktapur",
            link:"/places/bhaktapur"
        },  {
            img:"/places/kritipur.jpg",
            title:"Kritipur",
            link:"/places/kritipur"
        },  {
            img:"/places/maitidevi.jpg",
            title:"Maitidevi",
            link:"/places/maitidevi"
        },  {
            img:"/places/patan.jpg",
            title:"Patan",
            link:"/places/patan"
        },  {
            img:"/places/putalisadak.jpg",
            title:"Putalisadak",
            link:"/places/putalisadak"
        },  {
            img:"/places/sankhamul.jpg",
            title:"Sankhamul",
            link:"/places/sankhamul"
        }
    ]
  return (
    <main className='grid md:grid-cols-4 grid-cols-2 pointer  ' >
        {
            imagesDetails.map((curElem,index)=>{
                return (
                    <div className="flex gap-4  items-center mt-4 " key={index}>
     
                    <img src={`${curElem.img}`} className='w-20 rounded-md ' alt={curElem.title} />
            
                  
                    <h5 className='text-lg font-semibold'>
                    {curElem.title}
                    </h5>
            
                  
                </div>
                )
            })
        }

  

  </main>
    
  )
}

export default Card