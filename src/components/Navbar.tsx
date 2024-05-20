import React, {FC} from 'react'; 

export const NavBar: FC = () => {
return(
	
	<nav className="NavBar flex sticky top-0 border-b-[2px] py-2 z-50 bg-white border-gray-300">
		<div className="max-w-screen-xl w-full flex flex-wrap items-center justify-center mx-auto">
			<div className="Logo flex px-4">	
				<a href="/"><img src = "/Hannes_Precision_Favicon.svg" className="w-10"/></a>
				<h2 className="text-[1.95rem] font-light leading-8">Hannes <br/>Precision</h2>
			</div>
			<div className="ml-auto">
				<a href="/About" className="mx-10 hover:text-[#ff0000]">ABOUT</a>
				<a href="/Process" className="mx-10 hover:text-[#ff0000]">PROCESS</a>
				<a href="/Contact" className="mx-10 hover:text-[#ff0000]"><span>CONTACT</span></a>
			</div>
		</div>
	</nav>
);
}; 

export default NavBar;
