
import Head from "next/head";
import {NavBar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import Link from "next/link";

export default function Process() {
  return (
    <>
	<Head>
		<title>Process</title>
		<meta name="description" content="Hannes Precision" />	
		<link rel="icon" href="/Hannes_Precision_Favicon.svg" />
    </Head>


	<NavBar />	

	<main className="min-w-screen h-fit overflow-hidden gap-y-16">
		<section className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 mb-8">
			<div className="flex flex-col items-center pb-16 justify-center right-0 w-full h-auto bg-red-500  text-white">
				<h1 className="text-[3.8rem] font-semibold col-span-3 mb-8">Our Process</h1>
				<div className="tracking-wide">
					<h3 className="text-[1.550rem] font-semibold transition ease-in-out hover:translate-x-5"><a href="#Equipment">Equipment</a></h3>
					<h3 className="text-[1.550rem] font-semibold transition ease-in-out hover:translate-x-5">Materials</h3>
					<h3 className="text-[1.550rem] font-semibold transition ease-in-out hover:translate-x-5">Industries</h3>
					<h3 className="text-[1.550rem] font-semibold transition ease-in-out hover:translate-x-5"><a href="#Quality">Quality</a></h3>
				</div>
			</div>

			<img src="/parts_bin.jpg" className="h-screen min-w-full lg:h-screen object-cover"/>
		</section>

		<a id="Equipment" className="block relative -top-24"></a>
		<section className="grid max-w-screen-xl mx-auto grid-cols-1 gap-x-8 py-8 px-4">	

			<div className="text-center pb-16">
			<h1 className="text-[2.45rem] font-bold lg:text-[3.05rem] text-[#ff0000]">The Right Tools for the Job</h1>
			<p>At Hannes, we use state-of-the-art technology and equipment to ensure the accuracy of our production. Our parts are checked continuously using Certified Gages and Precision measuring equipment as well as a mantis, a Motic Microscope with photographic and video capability and two optical comparators to ensure quality and consistency.</p>
			</div>
				



			<div className="grid grid-cols-2 gap-y-16">

				<div className="border-black text-center">
				<h2 className="text-[#ff0000] text-[1.95rem] font-semibold">CNC Swiss Lathes</h2>
					<ul>
						<li>4 Tornos Deco 10s</li>
						<li>1 Tornos Deco 20</li>
						<li>1 Tornos Deco 26/32</li>
						<li>1 Tornos Micro 8</li>
					</ul>
				</div>

				<div className="border-black  text-center">
					<h2 className="text-[#ff0000] text-[1.95rem] font-semibold">Inspection</h2>
					<ul>
						<li>3 J&L Optical Comparators</li>
						<li>Mantis</li>
						<li>Motic Microscope</li>
						<li>Keyence IM-6225, Image Dimension Measuring System</li>
					</ul>
				</div>
				
				<div className="border-black text-center">
					<h2 className="text-[#ff0000] text-[1.95rem] font-semibold">Lathes</h2>
					<ul>
						<li>Hardinge HLV-EM</li>
						<li>Hardinge DSM-59</li>
					</ul>
				</div>

				<div className="border-black text-center">
					<h2 className="text-[#ff0000] text-[1.95rem] font-semibold">Tool Grinders</h2>
					<ul>
						<li>Agathon</li>	
						<li>Hoffman</li>
					</ul>
				</div>

				<div className="border-black text-center">
					<h2 className="text-[#ff0000] text-[1.95rem] font-semibold">Cleaning</h2>
					<ul>
						<li>Serec Airless Vacuum Vapor Degreasing Machine with Ultrasonics</li>
					</ul>
				</div>

			</div>


		
		</section>

		<section id="Materials" className="text-center">

			<h1 className="text-[2.45rem] font-bold lg:text-[3.05rem] text-[#ff0000]">Materials</h1>
			<div className="">
				<ul className="text-[1.95rem]">
					<li>300, 400 Series and 17-4 Stainless Steels</li>
					<li>Brass Alloys</li>
					<li>Beryllium Copper</li>
					<li>Aluminum</li>
					<li>Cold Rolled Steel</li>
					<li>Tool Steels</li>
					<li>Copper Alloys</li>
					<li>Plastics</li>
				</ul>
			</div>

		</section>

		<section id="Industries" className="my-8 grid max-w-screen-xl mx-auto grid-cols-1 px-4 text-center">
			<h1 className="text-[#ff0000] text-[3.05rem] font-semibold ">Industries</h1>
			<p className="pb-16">For more than 30 years this family run operation has been manufacturing precision Swiss Automatic screw machine products for customers in demanding fields including computers, electronics, and recreational automotive applications.</p>

			<div className="grid grid-cols-2 mx-auto gap-x-12 gap-y-8">
				<p className="text-[1.95rem]">Automotive</p>
				<p className="text-[1.95rem]">Defense</p>
				<p className="text-[1.95rem]">Computer</p>
				<p className="text-[1.95rem]">Entertainment</p>
				<p className="text-[1.95rem]">Electronics</p>
				<p className="text-[1.95rem]">Instrumentation</p>
				<p className="text-[1.95rem]">Communications</p>
			</div>
		</section>

		<section id="Quality" className="my-8 grid max-w-screen-xl text-center mx-auto gap-4 px-4 mb-64">
			<h1 className="text-[#ff0000] text-[3.05rem] font-semibold">Quality</h1>
			<p className="">Hannes Precision is an ISO 9001:2015 Certified company and adheres to the highest standards of quality. Our parts are checked continuously using Certified Gages and Precision measuring equipment as well as a mantis, a Motic Microscope with photographic and video capability and two optical comparators to assure quality and consistency.</p>
		</section>
	</main>

	<Footer />
	</>	
  );
}
