/* eslint-disable */
// @ts-nocheck
import React, { ReactNode } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEnvelope, faHouse, faPhone, faBuilding} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
	return(
	<div className="text-[#ff0000]">
		<Flyout href="/Contact" FlyoutContent={ContactSheet}>203-853-7276</Flyout>	
	</div>
	);
};


export const Flyout = ({children, href, FlyoutContent}) => {
	const [open, setOpen] = useState(false);

	const showFlyout = open && FlyoutContent;


	return(
	<div 
	  onMouseEnter = {() => setOpen(true)}
	  onMouseLeave = {() => setOpen(false)}
	  className = "group relative h-fit w-fit"
	>
	  <a href={href} className="flex">
		{children}
		<span
			style = {{
				transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
			}}		
			className="absolute -bottom-2 -left-2 -right-2 h-1
			origin-left rounded-full bg-red-400 transition-transform
			duration-300 ease-out" 
		/>
	  </a>
		<AnimatePresence>
		{showFlyout && (
			<motion.div 
			initial={{opacity: 0, y: 15}}
			animate = {{opacity: 1, y: 0}}
			exit = {{opacity:0, y: 15}}
			style = {{translateX: '-50%'}}
			className="absolute left-1/2  top-10 text-black">
				<div className="absolute -top-6 left-0 right-0 h-6
				bg-transparent"/>
				<FlyoutContent/>
			</motion.div>
		)}
		</AnimatePresence>
	</div>
	);
};

const ContactSheet = () => {
  return(
	<div className="flex flex-col items-center 
	h-auto w-auto
	bg-white p-6 shadow-xl">

		<h3 className="font-semibold text-[1.55rem]">Contact Us</h3>
		<p className="my-2 mr-2">  sales@hannesprecision.com</p>
		<p  className="my-2">203-853-7276</p>
		<div className="flex text-nowrap w-fill items-center pb-4">
			<div>
				<h3 className="items-center font-semibold ">Office</h3>
				<p  className=" mr-4">12 Pleasant Street <br/> Norwalk, CT, 06855 </p>
			</div>
			<div>
				<h3 className="items-center font-semibold">Manufacturing</h3>
				<p  className=""> 74 Fort Point Street <br/> Norwalk, CT, 06855</p>
			</div>
		</div>
		<p><a className="font-semibold">Office Hours:</a> 8:30 - 5:00 pm EST</p>	
	</div>
  );
};

export default Contact;
