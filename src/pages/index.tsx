import Head from "next/head";
import {NavBar} from '../components/Navbar';
import {Footer} from "../components/Footer"
import Link from "next/link"; 

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
	
	<div className="flex mx-auto -my-10 max-w-screen-xl h-screen max-h-screen-xl">
		
		<img src="/Dime_Edited.png" className = "absolute object-cover h-full z-0"/>
		<div className=" place-self-center my-4 px-4 z-10">
			<h1 className="max-w-2xl text-4xl font-semibold tracking-tight mb-6 
			text-[2.45rem] lg:text-[3.8rem] text-nowrap">
				<span className="text-[#ff0000]">Swiss</span> Made In The USA™
			</h1>  

			<p className="mb-3 lg:mb-8 font-light w-2/3 lg:w-1/2 
			tracking-normal leading-8 text-gray-950 md:text-lg lg:text-xl">
			Hannes Precision Has specialized in Swiss screw machining and décolletage since 1973. Collectively, we have over 100 
			years of direct and responsible machining experience. We make your parts designed to your specifications.</p>

			<div>
				<div className="ContactButton inline bg-[#ff0000] rounded-md px-4 py-2 
				text-lg leading-6 font-semibold text-white ring-1 ring-gray-900/20 hover:ring-gray-900">
					<Link href="/Contact"><span>Contact Us</span></Link>
				</div>
				<div className="Equipment-button inline rounded-md mx-3 px-4 py-2 
				text-lg leading-6 font-semibold bg-gray-100 ring-1 ring-black/20 hover:ring-gray-900">
					<Link href="/Process"><span>Our Process</span></Link>
				</div>
			</div>
		</div>

	</div>


	<div className= "max-w-screen-xl mx-auto px-4 py-10">
		<div className="grid grid-cols-2 gap-5">
			<img src="/brasspart.jpg"className="transition ease-out z-0 drop-shadow-lg rounded-md h-auto w-[100%] hover:-translate-y-2" />
			<img src="/boss_vertical.jpg" className="transition ease-out row-span-2 drop-shadow-lg rounded-md z-0 hover:-translate-y-2" />
			<img src="/screw_machine.jpg" className="transition ease-out drop-shadow-lg rounded-md z-0 hover:-translate-y-2" />
		</div>
	</div>

	<Footer />	

	</section>
		
    </>
  );
}
