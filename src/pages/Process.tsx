
import Head from "next/head";
import {NavBar} from "../components/Navbar";
import {Footer} from "../components/Footer";

export default function Process() {
  return (
    <>
	<Head>
		<title>Process</title>
		<meta name="description" content="Hannes Precision" />	
		<link rel="icon" href="/Hannes_Precision_Favicon.svg" />
    </Head>


	<NavBar />	

	<main className="flex flex-col min-w-screen w-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden ">
		<section className="snap-start grid grid-cols-1 lg:grid-cols-2 ">
			<div className="flex flex-col items-center pb-16 justify-center right-0 w-full h-auto bg-red-500  text-white">
				<h1 className="text-[3.8rem] font-semibold col-span-3 mb-8">Our Process</h1>
				<div className="tracking-wide">
					<h3 className="text-[1.550rem] font-semibold transition ease-in-out hover:translate-x-5"><a href="#Equipment">Equipment</a></h3>
					<h3 className="text-[1.550rem] font-semibold transition ease-in-out hover:translate-x-5"><a href="#Materials">Materials</a></h3>
					<h3 className="text-[1.550rem] font-semibold transition ease-in-out hover:translate-x-5"><a href="#Industries">Industries</a></h3>
					<h3 className="text-[1.550rem] font-semibold transition ease-in-out hover:translate-x-5"><a href="#Quality">Quality</a></h3>
					<h3 className="text-[1.550rem] font-semibold transition ease-in-out hover:translate-x-5"><a href="#FAQ">FAQ</a></h3>
				</div>
			</div>

			<img src="/parts_bin.jpg" className="min-h-1/2 lg:h-screen min-w-full object-cover"/>
		</section>

		<section id="Equipment" className="flex flex-col justify-center items-center snap-start  
		mx-auto py-12 w-screen grid-cols-1 gap-x-8 px-4 mt-4">	

			<div className="text-center mb-16">
			<h1 className="text-[2.45rem] font-bold lg:text-[3.05rem] text-[#ff0000]">The Right Tools for the Job</h1>
			<p className="max-w-screen-xl mx-auto">At Hannes, we use state-of-the-art
			technology and equipment to ensure the accuracy of our production. 
			Our parts are checked continuously using Certified Gages and Precision
			measuring equipment to ensure quality and consistency.</p>
			</div>
				



			<div className="grid grid-cols-2 gap-y-12">

				<div className="border-black text-center">
				<h2 className="text-[#ff0000] text-[1.95rem] font-semibold">CNC Swiss Lathes</h2>
					<ul className=" text-[1.55rem] xl:text-[1.95rem] ">
						<li>6 Tornos Deco 10s</li>
						<li>1 Tornos Deco 20</li>
						<li>1 Tornos Deco 26/32</li>
						<li>1 Tornos Micro 8</li>
					</ul>
				</div>

				<div className="border-black  text-center">
					<h2 className="text-[#ff0000] text-[1.95rem] font-semibold">Inspection</h2>
					<ul className=" text-[1.55rem] xl:text-[1.95rem]">
						<li>3 J&L Optical Comparators</li>
						<li>Mantis</li>
						<li>Motic Microscope</li>
						<li>Keyence IM-6225</li>
					</ul>
				</div>
				
				<div className="border-black text-center">
					<h2 className="text-[#ff0000] text-[1.95rem] font-semibold">Lathes</h2>
					<ul className="text-[1.55rem] xl:text-[1.95rem]">
						<li>Hardinge HLV-EM</li>
						<li>Hardinge DSM-59</li>
					</ul>
				</div>

				<div className="border-black text-center">
					<h2 className="text-[#ff0000] text-[1.95rem] font-semibold">Tool Grinders</h2>
					<ul className="text-[1.55rem] xl:text-[1.95rem]">
						<li>Agathon</li>	
						<li>Hoffman</li>
					</ul>
				</div>

				<div className="border-black text-center">
					<h2 className="text-[#ff0000] text-[1.95rem] font-semibold">Cleaning</h2>
					<ul className="text-[1.55rem] xl:text-[1.95rem]">
						<li>Serec Airless Vacuum Vapor Degreasing Machine</li>
					</ul>
				</div>

			</div>


		
		</section>

		<section id="Materials" className="flex flex-col items-center justify-center snap-start text-center">

			<h1 className=" text-[2.45rem] font-bold lg:text-[3.05rem] text-[#ff0000]">Materials</h1>
			<div className="">
				<ul className="text-[1.55rem] xl:text-[1.95rem]">
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

		<section id="Industries" className="flex flex-col items-center justify-center snap-start h-screen w-screen mx-auto grid-cols-1 px-4 text-center">
			<h1 className="text-[#ff0000] text-[3.05rem] font-semibold ">Industries</h1>
			<p className="pb-16 max-w-screen-xl">For more than 50 years this family 
			run operation has been manufacturing precision Swiss Automatic screw 
			machine products for customers in demanding fields such as computers,
			electronics, and recreational automotive applications. We are committed
			to privacy, and all client information is kept confidential.</p>

			<div className="grid text-[1.55rem] xl:text-[1.95rem] grid-cols-2 mx-auto gap-x-12 gap-y-8">
				<p >Automotive</p>
				<p >Defense</p>
				<p >Computer</p>
				<p>Entertainment</p>
				<p >Electronics</p>
				<p >Instrumentation</p>
				<p>Communications</p>
			</div>
		</section>

		<section id="Quality" className="flex flex-col items-center justify-center snap-start 
		min-h-screen w-screen text-center mx-auto gap-4 px-4">
			<h1 className="text-[#ff0000] text-[3.05rem] font-semibold">Quality</h1>
			<p className="max-w-screen-xl mx-auto mb-16">Hannes Precision is an ISO 9001:2015 Certified company and adheres to the highest standards of quality. Our parts are checked continuously using Certified Gages and Precision measuring equipment as well as a mantis, a Motic Microscope with photographic and video capability and two optical comparators to assure quality and consistency.</p>
			<div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row gap-16">
			<img className="object-cover max-w-56 " src="/intertek.png"/>
			<img className="object-cover max-w-72 " src="/ANAB_Symbol.webp"/>
			<img className="object-cover max-w-64 " src="/DFARS.png"/>
			</div>
		</section>


		<section id="FAQ" className="flex flex-col snap-start items-center
		h-screen w-screen mx-auto gap-4 px-4 ">
			<h1 className="text-[#ff0000] text-[3.05rem] font-semibold">Frequently Asked Questions</h1>
			<div className="max-w-screen-xl items-start flex flex-col gap-y-12">
				<div>
				<h3 className="text-[#ff0000] text-[1.55rem]">What is the average lead time on an order?</h3>
				<p>Times Range from 1 week to 6 months, depending on volume and part complexity.</p>
				</div>

				<div>
				<h3 className="text-[#ff0000] text-[1.55rem]">Is there a minimum order quantity?</h3>
				<p>There is no minimum order quantity, but bulk orders will likely have better value.</p>
				</div>

				<div>
				<h3 className="text-[#ff0000] text-[1.55rem]">Are there any operations you can&apos;t do?</h3>
				<p>The following operations will need to be outsourced</p>
				<ul className="tracking-wide">
					<li>Thread rolling</li>
					<li>Heat Treating</li>
					<li>Plating</li>
					<li>Grinding</li>
				</ul>
				</div>

			</div>
		</section>
	</main>

	<Footer />
	</>	
  );
}
