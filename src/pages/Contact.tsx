import Head from "next/head";
import {NavBar} from "../components/Navbar"
import {Footer} from "../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'

export default function Contact(){
return(
<>
<Head>
	<title>Contact</title>
	<meta name="description" content="Hannes Precision" />
	<link rel="icon" href="/Hannes_Precision_Favicon.svg" />
</Head>

<NavBar />
<main className="min-w-screen min-h-screen items-center py-8 justify-center">
	<section className="max-w-screen-xl grid grid-cols-1 lg:grid-cols-3 gap-x-4 mx-auto leading-20">
		<div className="grid items-center justify-center lg:col-span-3">
			<h1 className="text-[2.45rem] items-center justify-center">Send Sales Queries To:</h1>
		</div>

		<div className="Phone flex flex-col items-center py-8 rounded-lg w-full">
			<FontAwesomeIcon icon={faPhone} className="h-20" />
			<h1 className="text-[1.95rem]">Phone</h1>
			<p className="text-[1.95rem] font-semibold">203-853-7276</p>
		</div>

		<div className="Mail flex flex-col items-center py-8 rounded-lg w-full">
			<FontAwesomeIcon icon={faEnvelope} className="h-20" />
			<h1 className="text-[1.95rem]">Email</h1>
			<a href="mailto:sales@hannesprecision.com" className="text-[1.95rem] font-semibold">sales@hannesprecision.com</a>
		</div>

		<div className="Address flex flex-col items-center py-8 rounded-lg w-full">
			<FontAwesomeIcon icon={faBuilding} className="h-20" />
			<h1 className="text-[1.95rem]">Address</h1>
			<p className="text-[1.95rem] font-semibold">74 Fort Point Street<br/>Norwalk, CT 06855</p>
		</div>
	</section>

	<div className="flex flex-col mx-auto w-screen items-center justify-center ">
		<a className="underline pb-4" href="/Terms_and_Conditions.pdf"><FontAwesomeIcon icon={faDownload} className="h-20" /></a>
		<h1 className = "text-[1.5rem] mb-2" >Download our Terms and Conditions</h1>
	</div>


</main>
<Footer />
</>
);
}
