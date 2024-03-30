import { BrowserRouter as Router } from "react-router-dom";
import RoutesWithAnimation from "./components/animation/RoutesWithAnimation";
import { Toaster } from "react-hot-toast";

export default function App() {
	return (
		<div className='p-4 h-screen flex items-center justify-center overflow-hidden'>
			<Router>
				<RoutesWithAnimation />
			</Router>
			<Toaster />
		</div>
	);
}
