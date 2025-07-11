import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Footer from '../components/Footer'
import image1 from '../assets/img1.webp'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3.webp'
import image4 from '../assets/img4.webp'
import image5 from '../assets/img5.webp'
import image6 from '../assets/img6.webp'
import image7 from '../assets/img7.webp'
import image8 from '../assets/img8.webp'


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className='flex justify-between'>
        <p className='text-2xl px-4 font-semibold text-gray-500'>Check out All Beads</p>
      </div>
      <div className='px-4 py-8 flex flex-wrap gap-8 items-center'>
        <Card image={image1} title='Beaded Bracelet'/>
        <Card image={image2} title='Pearl Earings'/>
        <Card image={image3} title='Beaded Earings'/>
        <Card image={image4} title='Beaded Bracelet'/>
        <Card image={image5} title='Pearl Earings'/>
        <Card image={image6} title='Pearl Neklace'/>
        <Card image={image7} title='Pearl Pendant'/>
        <Card image={image8} title='Pearl Pendant'/>

      </div>
      <Footer/>
    </>
  )
}

export default Home