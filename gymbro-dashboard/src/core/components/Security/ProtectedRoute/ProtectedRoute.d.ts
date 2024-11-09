import { JwtPayload } from "jsonwebtoken";

export type ProtectedRouteProps = {
	redirectTo: string;
	children: ReactNode;
}

interface TokenType extends JwtPayload {

}