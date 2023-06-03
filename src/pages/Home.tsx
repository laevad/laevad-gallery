import {Navbar} from "../components/Navbar.tsx";
import {UploadForm} from "../components/UploadForm.tsx";
import {ImageGallery} from "../components/ImageGallery.tsx";

export const Home = () => {
	return (
		<>
		<div className={"max-w-4xl mx-auto"}>
			<Navbar/>
			<UploadForm/>
			<ImageGallery/>
		</div>
		</>
	)
}