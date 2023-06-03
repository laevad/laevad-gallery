export const Signup = () => {
	return (
		<>
			<form action="">
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col">
						<div className="text-center lg:text-center">
							<h1 className="text-5xl font-bold">Laevad Gallery</h1>
							<p className="py-6">
								Signup to access the gallery
							</p>
						</div>
						<div className="card sm:w-[30rem] shadow-2xl bg-base-100">
							<div className="card-body">
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input type="text" placeholder="email" className="input input-bordered" />
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input type="text" placeholder="password" className="input input-bordered" />
								</div>
								<div className="form-control mt-6">
									<button className="btn btn-primary">Signup</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	)
}