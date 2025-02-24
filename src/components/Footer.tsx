
import Logo from '../assets/Images/logo1.jpeg'

const Footer = () => {
    return (
        <div>
            <section className=' bg-white text-black flex flex-wrap justify-evenly items-center py-5'>
                <div className='p-4 flex flex-col justify-center items-center max-w-[400px]'>
                    <img className='h-[170px] w-[210px] object-center object-fill' src={Logo} alt="Logo" />
                    <h1 className='text-2xl font-semibold py-3 '>INFORMATION TECHNOLOGY AND VOCATIONAL EDUCATION TRUST</h1>
                    <h2 className='text-xl'> a Section 8 company registered as an NGO under the Companies Act, 2013</h2>
                    <div>


                    </div>
                </div>
                <div className='p-4 flex flex-col justify-center items-center max-w-[400px] text-black'>

                    <h1 className='text-3xl font-semibold py-3 '>Quick Links</h1>
                    <div className='text-black flex flex-col text-start'>
                    <a className='text-2xl py-2' href="#">Blogs</a>
                    <a className='text-2xl py-2' href="#">Events</a>
                    <a className='text-2xl py-2' href="#">About Us</a>
                    <a className='text-2xl py-2' href="#">Contact Us</a>

                    </div>
                   
                    <div>
                    </div>
                </div>
                <div className='p-4 flex flex-col justify-center items-center max-w-[400px]'>
                    <h1 className='text-3xl font-semibold py-3 '>Address</h1>
                    <h2 className='text-xl w-[200px] text-wrap text-start'>Registered. Office : At House No. 192, 1st Floor, Main Road, Khichripur Village, Near By MCD SCHOOL , DELHI - 110091. Head Office : Kumar Chowk, Road No.-03 Dumra, Sitamarhi, Bihar - 843301</h2>
                    <div>


                    </div>
                </div>
            </section>
                <hr className='bg-orange-500 h-[2px]' />
            <div className='h-[60px] bg-white flex flex-col text-black justify-center items-center'>
                <p className='text-xl font-semibold'>Copyright 2025 . All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer