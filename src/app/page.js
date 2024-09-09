import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='h-screen flex items-center justify-center'>
          <h1 className='text-9xl font-bold'>Hello World!</h1>
      </div>
      <Footer/>
    </div>
  );
}
