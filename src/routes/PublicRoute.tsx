import {useAuth} from "../hooks/useAuth.ts";
import {Navigate} from "react-router-dom";
import React, {FC} from "react";




interface PublicRouteProps {
	children: React.ReactElement;
}

export const PublicRoute: FC<PublicRouteProps> =
	({children}) => {
	const { user } = useAuth();
	if(user) {
		return (
			<>
				<Navigate to={"/"} replace={true}/>
			</>
		)
	}
	return children;


}