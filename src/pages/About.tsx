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
	<main className="min-w-screen min-h-screen items-center justify-center">
		<img className="w-screen  object-cover" src="Meet_the_team.jpg" />
		<section title="About" className="px-8 py-4 h-screen grid grid-cols-1 md:grid-cols-1 max-w-screen-xl mx-auto gap-y-10">
		<div>
		<h1 className="text-[1.25rem] font-semibold md:text-[3rem] text-[#ff0000]">Our Vision</h1>
		<p className="text-[1.15rem]">Hannes Precision will be the preferred provider for the manufacture of precision screw machine parts. We will provide unmatched value to our clients, with our focus squarely on supporting their business and objectives. We will grow through references from our current and former clients,so our success depends upon their success. We'll do this while maintaining a heathy life balance, and we'll enjoy going to "work" every day for them.</p>
		</div>

		<div>
		<h1 className="HeroText text-[1.25rem] font-semibold md:text-[3rem] text-[#ff0000] ">Our History</h1>
		<p className="text-[1.15rem]">Founded in 1973 by Jean Schaer, Hannes Precision has established a reputation for the highest quality parts, outstanding customer service and competitive prices.
	For more than 40 years this family run operation has been manufacturing precision Swiss Automatic screw machine products for customers in demanding fields including computers, electronics, and recreational automotive applications.</p>
		</div>

		<div>
		<h1 className="text-[1.25rem] font-semibold md:text-[3rem] text-[#ff0000]">Mission Statement</h1>
		<p className="text-[1.15rem]">Our mission is to bring Swiss precision and American ingenuity to create the finest quality products at the most competitive price possible. Exceed our customers expectations through continuous innovation and customer interaction.</p>
		</div>
		</section>
	</main>
	<Footer />
  </>	
  );  
}
