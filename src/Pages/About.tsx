import Book1 from '../assets/Images/book-hand.jpg'
import Childern1 from '../assets/Images/childerns_reading.jpg'
import Childern2 from '../assets/Images/childers-2.jpg'
import Subscribe from '../components/Subscribe'
const About = () => {
  return (
    <div className='bg-white'>
         <section className="relative bg-cover bg-center h-80 flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${Book1})` }}>
        <div className=" bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-xl max-w-2xl">
            NGO working for children's education and health across India. 
            Donate money to NGO for underprivileged children's education & health. 
            Forget what you can get and see what you can give.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 space-y-6 md:space-y-0 md:space-x-10 text-black">
        <img src = {Childern1} alt="Mission" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className=" text-3xl md:text-5xl font-bold">Mission</h2>
          <p className="mt-4 text-gray-700 text-xl md:text-3xl">
            Our mission is to provide inclusive, high-quality education that empowers individuals 
            to reach their full potential. We strive to foster lifelong learning, critical thinking, 
            and creativity, equipping students with the skills and knowledge necessary to succeed 
            in a rapidly changing world and contribute positively to society.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">DONATE</button>
        </div>
      </section>

      {/* Vision Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-16 space-y-6 md:space-y-0 md:space-x-10 text-black">
        <div className="md:w-1/2  text-center md:text-right">
          <h2 className="md:text-5xl text-3xl font-bold">Vision</h2>
          <p className="mt-4 text-gray-700 text-xl md:text-3xl text-right">
            Our vision is to create an inclusive and dynamic educational environment that nurtures 
            creativity, critical thinking, and lifelong learning. We aim to empower every individual 
            with the knowledge, skills, and values needed to thrive in an ever-evolving world, fostering 
            a future where education unlocks boundless potential for all.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">DONATE</button>
        </div>
        <img src={Childern2} alt="Vision" className="w-full md:w-1/2 rounded-lg shadow-lg" />
      </section>

      {/* Subscribe Section */}
     <Subscribe/>

    </div>
  )
}

export default About