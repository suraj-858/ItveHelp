import sweeping from '../assets/Images/sweeping.jpg'
import Childern from '../assets/Images/childerns_reading.jpg'
import earth from '../assets/Images/grass_earth.png'
import hands from '../assets/Images/grass_hand.jpg'
import plant from '../assets/Images/plantation.jpg'
import inject from '../assets/Images/inject.jpg';
import read from '../assets/Images/read.jpg'
import many_childern from '../assets/Images/many_childern.jpg'
import Subscribe from '../components/Subscribe'

const Event = () => {
  return (
    <div className="bg-white">
      <section className="relative bg-cover bg-center h-80 flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${sweeping})` }}>
        <div className=" bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Events</h1>
          <p className="mt-2 text-lg max-w-2xl">
            Help today because tomorrow you may be the one who needs more helping!  
            Forget what you can get and see what you can give.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg shadow-lg">
            <img src={Childern} alt="Event" className="rounded-md w-full" />
            <h2 className="text-orange-500 font-bold mt-4">"INNOVATIVE LEARNING: SHAPING TOMORROW’S WORK..."</h2>
            <p className="text-gray-700 mt-2">📅 2024-09-06 | 📍 Sitamarhi, Bihar</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">Donate</button>
          </div>
          <div className="border p-4 rounded-lg shadow-lg">
            <img src={earth} alt="Event" className="rounded-md w-full" />
            <h2 className="text-orange-500 font-bold mt-4">"INNOVATIVE LEARNING: SHAPING TOMORROW’S WORK..."</h2>
            <p className="text-gray-700 mt-2">📅 2024-09-06 | 📍 Sitamarhi, Bihar</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">Donate</button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-cover bg-center text-white text-center py-16"
        style={{ backgroundImage: `url(${hands})` }}>
        <div className=" bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">Ready to Join With Us?</h2>
          <p className="mt-2 max-w-2xl">
            The secret to happiness lies in helping others. Never underestimate the 
            difference for the abused and the helpless.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">Contact With Us</button>
        </div>
      </section>

      {/* Recent Stories */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Recent Stories</h2>
        <p className="mt-2 text-gray-700">
          Help today because tomorrow you may be the one who needs more helping!
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="border p-4 rounded-lg shadow-lg">
            <img src={plant} alt="Story" className="rounded-md w-full" />
            <h3 className="font-bold mt-2">The Power of Trees: How Planting Trees Can Transform Our Planet</h3>
            <p className="text-gray-700 mt-2">
              The secret to happiness lies in helping others. You can make a difference in the lives of the poor.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-lg">
            <img src={inject} alt="Story" className="rounded-md w-full" />
            <h3 className="font-bold mt-2">Your Guide to Optimal Health: Strategies for a Balanced Life</h3>
            <p className="text-gray-700 mt-2">
              The secret to happiness lies in helping others. You can make a difference in the lives of the poor.
            </p>
          </div>
          <div className="border p-4 rounded-lg shadow-lg">
            <img src={read} alt="Story" className="rounded-md w-full" />
            <h3 className="font-bold mt-2">First charity activity of this summer</h3>
            <p className="text-gray-700 mt-2">
              The secret to happiness lies in helping others. You can make a difference in the lives of the poor.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative bg-cover bg-center text-white text-center h-[500px]"
        style={{ backgroundImage: `url(${many_childern})` }}>
          <div className="absolute inset-0 backdrop-brightness-60 z-0"></div>

        <div className=" bg-opacity-50 w-full h-full flex flex-col items-center justify-center ">
          <div className="grid md:grid-cols-4 gap-6 z-10">
            <div>
              <h3 className="text-3xl font-bold">0+</h3>
              <p>Money Donated</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">0+</h3>
              <p>Volunteers around the world</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">0+</h3>
              <p>People Impacted</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">0+</h3>
              <p>Positive Feedbacks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
     <Subscribe/>
      
    </div>
  )
}

export default Event