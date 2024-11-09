import React, { useEffect } from 'react';
import { ProtectedRouteProps } from './ProtectedRoute.d';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {

	// const token = useSelector(selectToken);
	// const dispatch = useDispatch();
	// const router = useNavigate();

	// const userRepo = new UserRepo();
	// const refreshUserSessionUseCase = new RefreshUserSessionUseCase(userRepo);

	// useEffect(() => {
	// 	let interval: any;
	// 	if (token) {
	// 		interval = setInterval(async () => {
	// 			const { exp }: TokenType = jwtDecode(token);
	// 			const currentTime = Date.now() / 1000;
	
	// 			if (exp && exp < currentTime) {
	// 				try {
	// 					const { data, status } = await refreshUserSessionUseCase.run();
	// 					if (status === 200 && data) {
	// 						console.log(data)
	// 						dispatch(setToken(data));
	// 					}
	// 					else {
	// 						dispatch(removeToken());
	// 						// router(props.redirectTo);
	// 					}
	// 				} catch {
	// 					dispatch(removeToken());
	// 					// router(props.redirectTo)
	// 				}
	// 			}
	
	// 		}, 1000);
	// 	}
	// 	return () => clearInterval(interval);
	// }, [token]);

	useEffect(() => {
		// if (!token) router.replace(props.redirectTo);
	}, [/*token*/])
	
	return <>{props.children}</>;
};

export default ProtectedRoute;
