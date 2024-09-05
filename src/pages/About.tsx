import Head from "next/head";
import {NavBar} from "../components/Navbar";
import {Footer} from "../components/Footer"

export default function About() {
  return (
  <>
	<Head>
        <title>About Us</title>
        <meta name="description" content="Hannes Precision" />
        <link rel="icon" href="/Hannes_Precision_Favicon.svg" />
	</Head>
	
	<NavBar />	
	<main className="min-w-screen min-h-full items-center justify-center">
		<img className="w-screen  object-cover" src="Meet_the_team.jpg" />
		<h1 className="flex justify-center py-8 text-[3.5rem] text-[#ff0000] font-bold ">About Us</h1>
		<section title="About" className="px-8 py-4 h-auto grid grid-cols-1 md:grid-cols-1 max-w-screen-xl mx-auto gap-y-10">
		<div className="grid grid-cols-2 auto-rows-fr gap-4">
			<div className="place-self-center h-auto">
				<h1 className="HeroText text-[1.25rem] font-semibold md:text-[3rem] text-[#ff0000] ">Quality since 1973</h1>
				<p className="text-[1.15rem]">Founded in 1973 by Jean Schaer, 
				Hannes Precision has established a reputation for innovation, parts of
				the highest quality, outstanding customer service, and competitive prices.
				For more than 51 years this family run operation has been manufacturing
				precision Swiss Automatic screw machine products for customers in
				demanding fields including computers, electronics, and recreational 
				automotive applications.</p>
			</div>

			<img src="boss_square.jpg" className="rounded-md"/>

			
			<img src="/original_lathe.jpg" className="rounded-md"/>

				
			<div className="place-self-center h-auto">
				<h1 className="text-[1.25rem] font-semibold md:text-[3rem] text-[#ff0000]">Mission Statement</h1>
				<p className="text-[1.15rem]">Our mission is to bring Swiss precision and 
				American ingenuity to create the finest quality products while creating
				value for our customers. To exceed our customers expectations through 
				continuous improvement and customer interaction.</p>
			</div>
			
			<div className="place-self-center h-auto">
				<h1 className="text-[1.25rem] font-semibold md:text-[3rem] text-[#ff0000]">Our Vision</h1>
				<p className="text-[1.15rem]">Hannes Precision will be the preferred
				provider for the manufacture of precision screw machine parts. 
				We will provide value to our clients, with our focus 
				squarely on supporting their business and objectives. We will grow 
				through references from our current and former clients,so our success 
				depends upon their success. We&apos;ll do this while maintaining a healthy
				life balance, and we&apos;ll enjoy going to work every day for them.</p>
			</div>

			<img src="/brasspart.jpg" className="rounded-md col-span-1 "/>

			

		</div>
		</section>
	</main>
	<Footer/>
  </>	
  );  
}
