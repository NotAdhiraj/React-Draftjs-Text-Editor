import "setimmediate";
import MyEditor from "./Editor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Instructions from "./Instructions";

function App() {
	return (
		<>
			<h2 className="heading">Demo Editor By Adhiraj</h2>
			<MyEditor />
			<ToastContainer />
			<Instructions/>
		</>
	);
}

export default App;
