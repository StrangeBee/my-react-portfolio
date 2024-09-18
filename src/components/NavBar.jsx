/** @format */

import logo from "../assets/lastElogo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const NavBar =
	() => {
		return (
			<nav className="mb-20 flex flex-col-reverse lg:flex-row items-center justify-between py-2 ">
				<div className="flex lg:flex-shrink-0 items-center ">
					<img
						src={logo}
						alt="page_logo"
						className="max-w-[250px] w-[100%]"
					/>
				</div>
				<div className="m-8 flex items-center justify-center gap-4 text-2xl">
					<a
						href="https://github.com/StrangeBee"
						className="pointer"
						target="_blank"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/oduola-ebenezer"
						className="pointer"
						target="_blank"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://www.x.com/oduolabenfico"
						className="pointer"
						target="_blank"
					>
						<FaSquareXTwitter />
					</a>

					{/* <FaInstagram /> */}
				</div>
			</nav>
		);
	};

export default NavBar;
