import { ChevronLeft,ChevronRight } from 'lucide-react';

<ChevronLeft size={24} />

export default function Recent() 
{
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-md text-blue-900 font-semibold">Recent  </div>  

        <div className="flex items-center justify-between text-xl font-bold ">
            
            <span className='text-blue-900 '>Recently Viewed Products</span>
             <span className="flex space-x-2 ">
                <button className='hover:bg-blue-600' >
                <ChevronLeft size={24} />
                </button>
                <button className='hover:bg-blue-900'>
                <ChevronRight size={24} />
                </button>
        </span>
        </div>

        <div className='py-12'></div>

        {/* <div className='bg-blue-700 flex items-center justify-between text-xl font-bold'>

            <span className='text-white px-12' ><p><br />Don't Miss Out Latest <br /> Trends & Offers</p> 
            <div className='py-4 text-sm'>
                <p>Register to receive news about the latest offers & discount codes</p>
                
            </div>
            
            </span>

            <span>

                <input type="text"
                placeholder='Enter your email'
                className='pl-10 pr-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </span>
            <span>
                <button>
                    sdvklj
                </button>
            </span>
            
        </div> */}

   <div className="relative w-full rounded-xl overflow-hidden max-w-7xl mx-auto mt-10">
      <img
        src="/bg.jpg"
        alt="Background"
        className="w-full h-40 object-cover"
      />
      <div className="absolute inset-0 bg-blue-800/70 flex flex-col md:flex-row items-center justify-between px-8 py-6 text-white space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold leading-snug">
            Don't Miss Out Latest <br /> Trends & Offers
          </h2>
          <p className="text-sm mt-2">
            Register to receive news about the latest offers & discount codes
          </p>
        </div>
        <div className="flex w-full md:w-auto items-center gap-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-black w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-violet-600 hover:bg-violet-800 px-5 py-2 rounded-md font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>

        
      
    </div>
  )
}
