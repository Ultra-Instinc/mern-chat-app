import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/messages/MessageContainer";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<motion.div
			initial={{ x: "100vw", opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: "-100vw", opacity: 0 }}
			transition={{ duration: 0.3 }}
			className='flex h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 '>
			<SideBar />
			<MessageContainer />
		</motion.div>
	);
}
