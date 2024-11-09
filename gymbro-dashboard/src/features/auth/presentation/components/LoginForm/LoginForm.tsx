import Loader from '@/core/components/Loader/Loader';
import { Button } from '@/core/components/ui/Button';
import { PasswordFormField } from '@/core/components/ui/PasswordFormField';
import { TextFormField } from '@/core/components/ui/TextFormField';
import { container } from "@/config/dependencies"
import { LoginUseCase } from '@/features/auth/application/usecases/login-usecase';
import { ICredentials } from '@/features/auth/domain/entities/login.entity';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { FaLock, FaUser } from "react-icons/fa";

export type LoginFormProps = {
}

const LoginForm: React.FC<LoginFormProps> = ({ }) => {
	const credentials: ICredentials = {
		userName: '',
		password: ''
	}

	const navigate = useNavigate();

	const loginUseCase = container.resolve<LoginUseCase>("LoginUseCase");

	const submitLogin = async (credentials: ICredentials) => {
		await loginUseCase.run(credentials);
		navigate("/");
	}

	return (
		<div className="bg-gradient flex flex-col items-center rounded-xl max-w-3xl p-5">
			<img className="mb-5" src="/img/logo/full-logo.svg" alt="GYMBRO" />
			<Formik
				initialValues={credentials}
				onSubmit={submitLogin}
			>
				{({
					values,
					errors,
					// handleBlur,
					handleChange,
					handleSubmit,
					isSubmitting
				}) => (
					<form onSubmit={handleSubmit} className="flex flex-col items-center">
						<TextFormField
							label="Username"
							name="userName"
							prefixIcon={<FaUser />}
							value={values.userName}
							onChange={handleChange}
							error={errors.userName}
						/>
						<PasswordFormField
							label="Password"
							name="password"
							prefixIcon={<FaLock />}
							value={values.password}
							onChange={handleChange}
							error={errors.password}
						/>
						<Button type='submit' onClick={() => { }} className="w-full dark:bg-dark bg-white text-primary">{
							isSubmitting ? <Loader /> : "Registrar"
						}</Button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default LoginForm;
