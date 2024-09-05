import React, {} from "react";
import {Flyout} from './Contact';
import Link from 'next/link';

const ProcessLink  = () => {
return(
	<Flyout href="/Process" FlyoutContent={ProcessDrop}>ORDERS</Flyout>
);
};

const ProcessDrop = () => {
return(

	<div className="flex flex-col items-center 
	h-auto w-auto
	bg-white p-10 shadow-xl
	gap-y-4">
		<Link href="/Process#Equipment" className="hover:text-[#ff0000]">Equipment</Link>
		<Link href="/Process#Materials" className="hover:text-[#ff0000]">Materials</Link>
		<Link href="/Process#Industries" className="hover:text-[#ff0000]">Industries</Link>
		<Link href="/Process#Quality" className="hover:text-[#ff0000]">Quality</Link>
	</div>

);
};

export const About = () => {
return(
	<Flyout href="/About" FlyoutContent={AboutDrop}>ABOUT</Flyout>
);
};

const AboutDrop = () => {

	<div className="w-0 h-0"/>
};

export default ProcessLink;
