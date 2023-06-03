import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

export const Navbar = () => {
	const handleLogout = async () => {
		try {
			await signOut(auth);
		}catch (error){
			console.log(error);
		}
	}
	return (
		<>
			<div>
				<div className="navbar bg-base-100 justify-between">
					<a className="font-bold normal-case text-xl">
						Laevad Gallery <span>📷</span>
					</a>
					<button onClick={
						handleLogout
					}>
						Logout
					</button>
				</div>
			</div>
		</>
	)
}