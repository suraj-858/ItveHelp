

const Subscribe = () => {
  return (
    <div><section className=' py-10' style={{backgroundColor:'#ffebeb'}}>
    <h1 className=' font-bold text-6xl pt-10 text-black'>Subscribe</h1>
        <hr className=' bg-orange-600 h-[6px] max-w-[500px] w-[50%] mx-auto mt-3' />
        <p className=' w-[80%] mx-auto mt-5 font-semibold text-4xl text-black text-wrap'>Subscribe To Get The Latest News About Us</p>

        <p className=' w-[80%] mx-auto mt-5 font-base text-2xl text-black text-wrap'>Please Drop Your Email Below To Get Daily
            Update About What We Do</p>

        <div className='flex justify-center items-center border-4 border-orange-500 p-6 max-w-[800px] mx-auto  mt-10 rounded-2xl'>
            <input className=' w-[60%] h-[50px]  border-2 border-orange-600 rounded-2xl text-black px-4' type="text" placeholder='Enter your email' />
            <button className=' max-w-[300px] bg-orange-500 border-[4px] border-orange-400 m-2 px-5 py-2 md:text-2xl text-lg text-center rounded-xl'>EDUCATION TURST</button>
            
        </div>
    </section></div>
  )
}

export default Subscribe