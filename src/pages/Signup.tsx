import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import {useNavigate} from "react-router-dom";

export const Signup = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			navigate("/");
		}catch (error) {
			setError(error.message);
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
			>
				{ error && <p className="text-red-500">{error}</p>}
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
									<input type="text" placeholder="email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input type="password" placeholder="password" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)}
									/>
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