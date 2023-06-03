import React, {useState} from "react";
import {useStorage} from "../hooks/useStorage.ts";

export const UploadForm = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const { startUpload } = useStorage();

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setSelectedFile(e.target.files[0]);
		}
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (selectedFile) {
			// upload file
			startUpload(selectedFile);
		}
		setSelectedFile(null);
	}

	return (
		<>
			<div className={"text-center mt-10"}>
				<form
					onSubmit={handleSubmit}
					action="" className={"flex items-center flex-col gap-8"}>
					<input type="file" className="file-input file-input-bordered w-full max-w-xs"
					onChange={handleFileChange}
					/>
					<button type={"submit"} className={"btn gap-3"}>
						Upload <span>🚀</span>
					</button>
				</form>
			</div>
		</>
	)
}