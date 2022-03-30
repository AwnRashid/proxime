import React from "react";
import Section from "../../../components/Section/Section";

const UserInfoJumbotron = ({ userCheck, userEmail }) => {
	return (
		<Section id="user-info-jumbotron">
			<div className="user-info-wrapper">
				<div className="user-img">
					<img src="./assets/imgs/profile-img.png" alt="user" />
				</div>

				<div className="username">
					{(userEmail && userCheck.length && userCheck[0].firstName) ||
						"No User found"}
				</div>

				<button className="btn btn-primary-inverted">+Watch</button>

				<div className="bio mt-4">
					<h6>BIO</h6>
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form.
					</p>
				</div>
			</div>
			<div className="tabs">
				<div className="tab active">Past Drops</div>
			</div>
		</Section>
	);
};

export default UserInfoJumbotron;
