import {useFirestore} from "../hooks/useFirestore.ts";

export const ImageGallery = () => {
	const { docs: images, isLoading } = useFirestore('images');

	if (isLoading) {
		return (
			<>
				<div className={"text-center mt-10"}>
					<progress className="progress w-56"></progress>
				</div>
			</>
		)
	}

	return (
		<>
		<div className={"grid md:grid-cols-3 justify-center gap-4 mt-10"}>
			{
				images.map((image) => (
					<div key={ image.imageUrl } className="card card-compact w-full bg-base-100 shadow-xl">
						<figure className={"max-h-[15rem]"} >
							<img src={image.imageUrl} alt="Shoes" />
						</figure>
						<div className="card-body">
							<p>
								Uploaded by <a href="#">{image.userEmail}</a>
							</p>
							<span>
						Created on <time>{ image.createdAt.toLocaleTimeString() }</time>
					</span>
						</div>
					</div>
				))
			}
		</div>
		</>
	)
}