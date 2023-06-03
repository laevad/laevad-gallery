export const ImageGallery = () => {
	return (
		<>
		<div className={"grid md:grid-cols-3 justify-center gap-4 mt-10"}>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure><img src="" alt="Shoes" /></figure>
				<div className="card-body">
					<p>
						Uploaded by <a href="#">@username</a>
					</p>
					<span>
						Created on <time>2021-09-01</time>
					</span>
				</div>
			</div>
		</div>
		</>
	)
}