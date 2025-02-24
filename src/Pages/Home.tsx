import Image from '../assets/Images/main.jpeg'
import Vote from '../assets/Images/vote.png'
import Network from '../Icons/Network'
import RibbonCut from '../assets/Images/ribbonCut.jpeg'
import Like from '../Icons/Like'
import Book from '../assets/Images/Book.jpg'
const Home = () => {
    return (
        <div>
            <section
                className="h-[600px] bg-no-repeat bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${Image})`, }}>
                <div className="absolute top-[119px] h-[600px] inset-0 backdrop-brightness-60 z-0"></div>
                <div className='z-10'>
                    <h1 className=' z-10 md:text-5xl text-3xl font-bold text-wrap
                    my-10'

                    >INFORMATION TECHNOLOGY AND <br /> VOCATIONAL EDUCATION TRUST</h1>

                    <p className='w-[80%] mx-auto'>The Information Technology and Vocational Education Trust is an organization focused on promoting IT skills and vocational training, empowering individuals with practical, job-ready competencies for the evolving digital economy.</p>
                    <div className=' button w-[35%] md:flex justify-between  items-center mx-auto mt-[50px] '>
                        <button className=" bg-orange-500 border-[4px] border-orange-400 m-2 px-5 py-2 md:text-2xl text-lg text-center rounded-xl">Join with us</button>
                        <button className=" bg-orange-500 border-[4px] border-orange-400 px-5 py-2 md:text-2xl text-lg text-center rounded-xl">Donate</button>

                    </div>
                </div>
            </section>
            <section className='h-[200px] flex justify-center bg-white relative'>
                <div className='w-[90%] flex justify-center items-center flex-wrap absolute gap-2 top-[-30%]'>
                    <div className=' rounded-md  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] min-h-[200px] w-[30%] bg-white top '>
                        <img className=' mx-5  mt-3 h-[80px] w-[80px]' src={Vote} alt="" />
                        <h1 className='text-black text-start font-bold text-2xl mt-6 m-2'>Make Donation</h1>
                        <p className='text-black text-start text-lg text-wrap m-2'>Help today because tomorrow you may be the one who needs helping</p>
                    </div>
                    <div className=' rounded-md  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] min-h-[200px] w-[30%] bg-white top '>
                        <img className=' mx-5  mt-3 h-[80px] w-[80px]' src={Vote} alt="" />
                        <h1 className='text-black text-start font-bold text-2xl mt-6 m-2'>Make Donation</h1>
                        <p className='text-black text-start text-lg text-wrap m-2'>Help today because tomorrow you may be the one who needs helping</p>
                    </div>
                    <div className=' rounded-md  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] min-h-[200px] w-[30%] bg-white top '>
                        <img className=' mx-5  mt-3 h-[80px] w-[80px]' src={Vote} alt="" />
                        <h1 className='text-black text-start font-bold text-2xl mt-6 m-2'>Make Donation</h1>
                        <p className='text-black text-start text-lg text-wrap m-2'>Help today because tomorrow you may be the one who needs helping</p>
                    </div>
                </div>
            </section>

            <section className='bg-gray-200  min-h-[500px]'>
                <h1 className=' font-bold text-6xl pt-10 text-black'>Recent Causes</h1>
                <hr className=' bg-orange-600 h-[6px] w-[50%] mx-auto mt-3' />
                <p className=' w-[80%] mx-auto mt-5 font-base text-5xl text-black text-wrap'>Help today because tomorrow you may be the one who needs more helping!</p>

                <div className='w-[100%] flex justify-evenly py-10 items-center'>
                    <div className='text-black  text-start min-h-[400px] min-w-[300px] max-w-[400px] border-2 border-dotted border-orange-600'>
                        <img className="h-[300px] object-center object-cover w-full " src={RibbonCut} alt="" />
                        <div className='p-4'>
                            <h2 className='text-2xl font-semibold'>The Power of Trees: How Planting Trees Can Transform</h2>
                            <p className=' my-2 flex-wrap'>The secret to happiness lies in helping others.Neve runderestimate the difference YOU can make in the lives of the poor.</p>
                            <div className=' flex w-full justify-between my-2'>
                                <span className='flex gap-2 items-center justify-center'><Network /> Goal: 4555</span>
                                <span className='flex gap-2 items-center justify-center'><Like /> Raised: 4000</span>
                            </div>
                        </div>

                    </div>

                    <div className='text-black  text-start min-h-[400px] max-w-[400px] border-2 border-dotted border-orange-600'>
                        <img className="h-[300px] object-center object-cover w-full " src={RibbonCut} alt="" />
                        <div className='p-4'>
                            <h2 className='text-2xl font-semibold'>The Power of Trees: How Planting Trees Can Transform</h2>
                            <p className=' my-2 flex-wrap'>The secret to happiness lies in helping others.Neve runderestimate the difference YOU can make in the lives of the poor.</p>
                            <div className=' flex w-full justify-between my-2'>
                                <span className='flex gap-2 items-center justify-center'><Network /> Goal: 4555</span>
                                <span className='flex gap-2 items-center justify-center'><Like /> Raised: 4000</span>
                            </div>
                        </div>

                    </div>

                    <div className='text-black  text-start min-h-[400px] max-w-[400px] border-2 border-dotted border-orange-600'>
                        <img className="h-[300px] object-center object-cover w-full " src={RibbonCut} alt="" />
                        <div className='p-4'>
                            <h2 className='text-2xl font-semibold'>The Power of Trees: How Planting Trees Can Transform</h2>
                            <p className=' my-2 flex-wrap'>The secret to happiness lies in helping others.Neve runderestimate the difference YOU can make in the lives of the poor.</p>
                            <div className=' flex w-full justify-between my-2'>
                                <span className='flex gap-2 items-center justify-center'><Network /> Goal: 4555</span>
                                <span className='flex gap-2 items-center justify-center'><Like /> Raised: 4000</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className=' flex  justify-center items-center md:h-[600px] h-[400px] w-[100%] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${Book})` }}>
                <div className='max-w-[600px] p-6 h-[100%] flex flex-col justify-evenly md:mr-10 mr-4'>
                    <button className=' max-w-[300px] bg-orange-500 border-[4px] border-orange-400 m-2 px-5 py-2 md:text-2xl text-lg text-center rounded-xl'>EDUCATION TURST</button>
                    <h1 className='text-5xl font-bold text-wrap'>Unlocking Potential: The Power of Education</h1>
                    <p className='flex-wrap py-4  text-2xl '>"Exploring how education empowers individuals, unlocks opportunities, and drives personal and societal growth."</p>
                    <div className='h-[20px] w-[100%]  flex items-center relative'>
                        <div className='h-[12px] rounded-md w-[100%] bg-orange-500 bg-gradient-to-r from-orange-500 from-55% to-white to-55%'></div>
                        <span className=' absolute left-[54%] px-2 py-3 bg-orange-500 rounded-full'>56%</span>
                    </div>
                    <div className=' flex w-full justify-between my-4 text-2xl '>
                        <span className='flex gap-2 items-center justify-center'><Network /> Goal: 4555</span>
                        <span className='flex gap-2 items-center justify-center'><Like /> Raised: 4000</span>
                    </div>
                </div>
                <div className='md:ml-10 ml-5'>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/N1Yw2zH57CQ`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>
            </section>

            <section className='bg-gray-200  min-h-[500px]'>
                <h1 className=' font-bold text-6xl pt-10 text-black'>Upcoming Events</h1>
                <hr className=' bg-orange-600 h-[6px] w-[50%] max-w-[600px] mx-auto mt-3' />
                <p className=' w-[80%] mx-auto mt-5 font-base text-5xl text-black text-wrap'>Help today because tomorrow you may be the one who needs more helping!</p>

                <div className=' p-10 flex flex-wrap justify-evenly items-center gap-2'>
                <div className='text-black  text-center min-h-[400px] max-w-[400px] border-2 border-dotted border-orange-600'>
                        <img className="h-[300px] w-[300px] mx-auto my-4 object-center object-cover rounded-full " src={RibbonCut} alt="" />
                        <div className='p-4'>
                            <h2 className='text-2xl font-semibold'>Transforming Lives:</h2>
                            <h3 className='text-xl font-semibold py-2'>The Impact of Quality Education</h3>
                            <p className=' my-2 flex-wrap text-xl'>The Historical Context of Education Early Education Systems Education in its earliest forms was informal, with knowledge passed down orally from generation to generation. As societies became more structured, so... 
                                <a href="">Read more ...</a></p>
                            
                        </div>

                    </div>

                    <div className='text-black  text-center min-h-[400px] max-w-[400px] border-2 border-dotted border-orange-600'>
                        <img className="h-[300px] w-[300px] mx-auto my-4 object-center object-cover rounded-full " src={RibbonCut} alt="" />
                        <div className='p-4'>
                            <h2 className='text-2xl font-semibold'>Transforming Lives:</h2>
                            <h3 className='text-xl font-semibold py-2'>The Impact of Quality Education</h3>
                            <p className=' my-2 flex-wrap text-xl'>The Historical Context of Education Early Education Systems Education in its earliest forms was informal, with knowledge passed down orally from generation to generation. As societies became more structured, so... 
                                <a href="">Read more ...</a></p>
                            
                        </div>

                    </div>

                    <div className='text-black  text-center min-h-[400px] max-w-[400px] border-2 border-dotted border-orange-600'>
                        <img className="h-[300px] w-[300px] mx-auto my-4 object-center object-cover rounded-full " src={RibbonCut} alt="" />
                        <div className='p-4'>
                            <h2 className='text-2xl font-semibold'>Transforming Lives:</h2>
                            <h3 className='text-xl font-semibold py-2'>The Impact of Quality Education</h3>
                            <p className=' my-2 flex-wrap text-xl'>The Historical Context of Education Early Education Systems Education in its earliest forms was informal, with knowledge passed down orally from generation to generation. As societies became more structured, so... 
                                <a href="">Read more ...</a></p>
                            
                        </div>

                    </div>
                </div>
            </section>
           
            <section className=' py-10' style={{backgroundColor:'#ffebeb'}}>
            <h1 className=' font-bold text-6xl pt-10 text-black'>Subscribe</h1>
                <hr className=' bg-orange-600 h-[6px] max-w-[500px] w-[50%] mx-auto mt-3' />
                <p className=' w-[80%] mx-auto mt-5 font-semibold text-4xl text-black text-wrap'>Subscribe To Get The Latest News About Us</p>

                <p className=' w-[80%] mx-auto mt-5 font-base text-2xl text-black text-wrap'>Please Drop Your Email Below To Get Daily
                    Update About What We Do</p>

                <div className='flex justify-center items-center border-4 border-orange-500 p-6 max-w-[800px] mx-auto  mt-10 rounded-2xl'>
                    <input className=' w-[60%] h-[50px]  border-2 border-orange-600 rounded-2xl text-black px-4' type="text" placeholder='Enter your email' />
                    <button className=' max-w-[300px] bg-orange-500 border-[4px] border-orange-400 m-2 px-5 py-2 md:text-2xl text-lg text-center rounded-xl'>EDUCATION TURST</button>
                    
                </div>
            </section>
        </div>
    )
}

export default Home