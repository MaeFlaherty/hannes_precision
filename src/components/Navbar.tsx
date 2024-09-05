import React, {FC} from 'react'; 
import Contact, {} from './Contact';
import ProcessLink, {} from './ProcessLink';
import {About} from './ProcessLink';
import Link from 'next/link';

export const NavBar: FC = () => {

return(
	
	<nav className="NavBar flex sticky top-0 border-b-[2px] py-2 z-50 bg-white border-gray-300">
		<div className="max-w-screen-xl w-full flex flex-wrap items-center justify-center mx-auto">
			<div className="Logo flex px-4">	
				<Link href="/"><img src = "/Hannes_Precision_Favicon.svg" className="w-10"/></Link>
				<h2 className="text-[1.95rem] font-light leading-8">Hannes <br/>Precision</h2>
			</div>
			<div className="flex ml-auto gap-x-10">
				<About/>
				<ProcessLink/>
				<Contact />
			</div>
		</div>
	</nav>
);
}; 

export default NavBar;
