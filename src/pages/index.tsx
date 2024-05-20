import Head from "next/head";
import GridLines from 'react-gridlines';
import {NavBar} from '../components/Navbar';
import {Footer} from "../components/Footer"

export default function Home() {
  return (
    <>
	<Head>
		<title>Hannes Precision TEST BUILD</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/Hannes_Precision_Favicon.svg" />
    </Head>


	
	<NavBar />
	
	<section className="min-h-screen min-w-screen bg-gradient-to-b from-transparent to-white">
	<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py lg:grid-cols-12">
		<div class=" place-self-center my-4 w-full col-span-full lg:col-span-7">
			<h1 className="max-w-2xl text-4xl font-semibold tracking-tight mb-6 
			text-[3.05rem] lg:text-[3.8rem] text-nowrap">
				<span className="text-[#ff0000]">Swiss</span> Made In The USA
			</h1>  
			<p className="max-w-2xl mb-3 font-light tracking-normal leading-8 text-gray-950 lg:mb-8 md:text-lg lg:text-xl">Hannes Precision's vision, mission and values have attracted the top talent in precision parts manufacture. Collectively we have over 80 years of direct and responsible machining experience. We will happily match our credentials and experience with any group of like manufacturing professionals in the world.</p>

			<div>
				<div className="ContactButton inline bg-[#ff0000] rounded-md px-4 py-2 
				text-lg leading-6 font-semibold text-white ring-1 ring-gray-900/20 hover:ring-gray-900">
					<a href="/Contact"><span>Contact Us</span></a>
				</div>
				<div className="Equipment-button inline rounded-md mx-3 px-4 py-2 
				text-lg leading-6 font-semibold bg-gray-100 ring-1 ring-black/20 hover:ring-gray-900">
					<a href="/Process"><span>Our Process</span></a>
				</div>
			</div>


		</div>

		<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
			<img src ="/Dime_edited.png" />	
		</div>

		<div className= "col-span-12">
			<div className="grid grid-cols-2 gap-5 ">
				<img src="/drill_bit.jpg"className="transition ease-in-out bg-red-500 rounded-md min-h-[50px] h-auto hover:-translate-y-2" />
				<img src="/screw_machine.jpg" className="transition ease-out row-span-2 drop-shadow-lg rounded-md z-0 hover:-translate-y-2" />
				<img src="/turning_screw.jpg" className="transition ease-out drop-shadow-lg rounded-md z-0 hover:-translate-y-2" />
			</div>
		</div>


	</div>
	<Footer />	

	</section>
		
    </>
  );
}
