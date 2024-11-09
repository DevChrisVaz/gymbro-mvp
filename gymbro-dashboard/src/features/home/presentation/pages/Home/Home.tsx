import { IToast, ToastContext, ToastMapKey } from '@/core/components/Toast';
import { Button } from '@/core/components/ui/Button';
import { AuthLocalDataSourceImpl } from '@/features/auth/data/data-sources/auth-local-data-source';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export type HomeProps = {
}

const Home: React.FC<HomeProps> = ({ }) => {

	const { addToast } = useContext(ToastContext);
	const navigate = useNavigate();

	const authLocalDataSource = new AuthLocalDataSourceImpl();

	const createToast = (type: ToastMapKey, message: string) => {
		const newToast: IToast = {
			type: type,
			title: "Random title",
			message
		}

		addToast(newToast);
	}

	const logout = () => {
		authLocalDataSource.removeToken();
		navigate("/login");
	}

	return (
		<div className='text-white'>
			<h1>Dashboard Home page</h1>
			<Button onClick={() => createToast("success", "Success toast")} className="bg-gradient text-white">Mostrar Success Toast</Button>
			<Button onClick={() => createToast("error", "Error toast")} className="bg-gradient text-white">Mostrar Error Toast</Button>
			<Button onClick={logout} className="bg-gradient text-white">Logout</Button>
		</div>
	);
};

export default Home;
