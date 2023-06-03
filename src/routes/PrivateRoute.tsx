import {useAuth} from "../hooks/useAuth.ts";
import {Navigate} from "react-router-dom";
import React, {FC} from "react";




interface PrivateRouteProps {
	children: React.ReactElement;
}

export const PrivateRoute: FC<PrivateRouteProps> =
	({children}) => {
		const { user } = useAuth();
		if(!user) {
			return (
				<>
					<Navigate to={"/signup"} replace={true}/>
				</>
			)
		}
		return children;


	}