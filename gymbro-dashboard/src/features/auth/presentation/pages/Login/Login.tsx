import React, { useEffect } from 'react';
import { LoginForm } from '../../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { container } from "@/config/dependencies";
import { AuthLocalDataSource } from '@/features/auth/data/data-sources/auth-local-data-source';

export type LoginProps = {
}

const Login: React.FC<LoginProps> = ({ }) => {
	const navigate = useNavigate();

	const authLocalDataSource = container.resolve<AuthLocalDataSource>("AuthLocalDataSource");

	useEffect(() => {
		if (authLocalDataSource.getToken()) {
			navigate("/");
		}
	}, []);

	return (
		<section className="dark:bg-dark bg-light min-h-screen flex items-center justify-center">
			<LoginForm />
		</section>
	);
};

export default Login;
