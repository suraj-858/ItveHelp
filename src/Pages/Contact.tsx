import lapotp from '../assets/Images/laptop.jpg'
import Subscribe from '../components/Subscribe';

const ContactUs = () => {
  return (
    <div className="" style={{backgroundColor: "#ffebeb"}}>
      {/* Header Section */}
      <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${lapotp})` }}>
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Contact Us</h1>
          <p className="text-white mt-2">Help today because tomorrow you may be the one who needs more helping!</p>
        </div>
      </div>

      <div className='flex justify-center gap-4 items-center my-auto h-[500px]'>
      <div className="max-w-[40%] p-6  rounded-lg " style={{backgroundColor: "#ffebeb"}}>
        <h2 className="text-3xl font-bold text-gray-900">Ideas to Us</h2>
        <p className="mt-2 text-xl text-gray-700">
          Contact us for questions, technical assistance, or collaboration opportunities via the contact information provided.
        </p>
        <p className="mt-2 text-xl py-2 text-gray-900 font-semibold">parshurammahadevfoundation@gmail.com</p>
        <p className="mt-1 text-xl py-2 text-gray-700">
          Registered Office: At House No. 192, 1st Floor, Main Road, Khichripur Village, Near By MCD SCHOOL, DELHI - 110091.
        </p>
        <p className="mt-1 text-xl py-2 text-gray-700">
          Head Office: Kumar Chowk, Road No.-03 Dumra, Sitamarhi, Bihar - 843301
        </p>
      </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg text-black max-w-[40%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="p-3 border rounded w-full" />
            <input type="email" placeholder="Email" className="p-3 border rounded w-full" />
          </div>
          <textarea placeholder="Message" className="p-3 border rounded w-full mt-4" rows={4}></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-blue-700">SUBMIT NOW</button>
        </div>

      </div>

     
      <Subscribe/>
    </div>
  );
};

export default ContactUs;
