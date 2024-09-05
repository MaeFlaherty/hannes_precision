import React, {FC} from "react";
import Link from 'next/link';

export const Footer: FC = () => {
	return(
	<section className="col-span-12">
	<div className="flex flex-col items-center  py-8 bg-gray-100 border-gray-300 border-t-4">
		<p className="text-gray-900 pb-6"><Link href="/">Home</Link>   |   <Link href="About">About</Link>   | <Link href="Process">Process</Link> |  <Link href="Contact">Contact</Link></p>
		<p className="text-grey-500 ">Hannes Precision Industries 
		| Site Designed by <a href="https://www.cs.drexel.edu/~mf3353" className="underline">Mae Flaherty</a></p>
		<div className="flex flex-row gap-10 m-5 Associates ">
		<a href="intertek_cert.pdf" target="_blank"><img className="h-16"src="/intertek.png" /></a>
		<a href="https://www.pmpa.org/" target="_blank"><img  src="/pmpa.gif" /></a>
		</div>
	</div>
	</section>
	);
};

export default Footer;
