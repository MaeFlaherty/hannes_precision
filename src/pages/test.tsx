import Head from "next/head";
import {NavBar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import Link from "next/link";

export default function Test(){
return(
<>
<Head>
	<title>Test Page</title>
	<meta name="description" content="Test Various Looks and elements for pages" />	
	<link rel="icon" href="/Hannes_Precision_Favicon.svg" />
</Head>

<div className="grid grid-cols-7 grid-rows-5 h-screen w-screen bg-red-500">
	<div className="col-start-4 row-start-1 bg-white col-span-1 row-span-5"></div>
	<div className="row-start-3 col-start-1 bg-white row-span-1 col-span-5"><p>Our</p></div>
	<div className="row-start-3 col-start-6 bg-white row-span-1 col-span-5"><p>Process</p></div>

</div>
</>
);
}
