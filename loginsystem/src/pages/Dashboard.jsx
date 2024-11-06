import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../components/logoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
	// Define Profile component
	const Profile = () => {
		const { user, isAuthenticated, isLoading } = useAuth0();

		if (isLoading) {
			return <div>Loading ...</div>;
		}

		return (
			isAuthenticated && (
				<div>
					<h1>Welcome to the Dashboard</h1>
					<LogoutButton />

					<div>
						<img src={user.picture} alt={user.name} />
						<h2>{user.name}</h2>
						<p>{user.email}</p>
						<p>{user.id}</p>
					</div>

					<button>
						<Link to="/update-user">Edit</Link>
					</button>
				</div>
			)
		);
	};

	// Render the Profile component here
	return (
		<div>
			<Profile />
		</div>
	);
};

export default Dashboard;