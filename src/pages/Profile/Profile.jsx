import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { AuthContext } from "../../Authentication";
import GridContainer from "../../components/GridContainer/GridContainer";
import Section from "../../components/Section/Section";

import MainLayout from "../../layouts/MainLayout";
import { gettingData } from "../../redux/action";
import UserInfoJumbotron from "./UserInfo/UserInfoJumbotron";

const Profile = ({ profile, gettingData }) => {
	const { userEmail } = useContext(AuthContext);

	useEffect(() => {
		gettingData("profile", "PROFILE");
	}, []);

	const userCheck =
		(userEmail && profile.filter((content) => content.email === userEmail)) ||
		[];

	return (
		<MainLayout>
			<UserInfoJumbotron userCheck={userCheck} userEmail={userEmail} />

			<Section id="single-drop">
				<GridContainer rowClassName="gy-4">
					<div className="col-lg-6 d-flex align-items-center">
						<img
							className="d-block w-100"
							src="./assets/imgs/release-1.png"
							alt="release-item"
						/>
					</div>
					<div className="col-lg-6 d-flex align-items-center">
						<div className="text">
							<h2>Your Title Here</h2>

							<p className="mt-4">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s,
								<br /> when an unknown printer took a galley of type and
								scrambled it to make a type specimen book.
							</p>

							<div className="drop-info mt-4">
								<div>Dropped Thursday 8/12 1am</div>
								<div>EDITIONS : 2500</div>
								<div className="d-inline-flex align-items-center">
									DETAILS
									<button className="btn btn-gradient ms-3">
										<img src="./assets/vectors/dots.svg" alt="dots" />
									</button>
								</div>
							</div>

							<div className="btns mt-5">
								<button className="btn btn-grey">Drop Ended</button>
								<button
									style={{ marginTop: 18 }}
									className="btn btn-light-grey"
								>
									View Editons
								</button>
							</div>
						</div>
					</div>
				</GridContainer>
			</Section>

			<Section id="past-drops">
				<GridContainer rowClassName="gy-4">
					{[
						{
							id: "drop-1",
							img: "./assets/imgs/featured-edition-1.png",
						},
						{
							id: "drop-2",
							img: "./assets/imgs/featured-edition-2.png",
						},
						{
							id: "drop-3",
							img: "./assets/imgs/featured-edition-3.png",
						},
						{
							id: "drop-4",
							img: "./assets/imgs/featured-edition-1.png",
						},
						{
							id: "drop-5",
							img: "./assets/imgs/featured-edition-2.png",
						},
						{
							id: "drop-6",
							img: "./assets/imgs/featured-edition-3.png",
						},
						{
							id: "drop-7",
							img: "./assets/imgs/featured-edition-1.png",
						},
						{
							id: "drop-8",
							img: "./assets/imgs/featured-edition-2.png",
						},
						{
							id: "drop-9",
							img: "./assets/imgs/featured-edition-3.png",
						},
					].map((el) => {
						const { id, img } = el;

						return (
							<div className="col-md-4 col-sm-6" key={id}>
								<img src={img} alt="drop" />
							</div>
						);
					})}
				</GridContainer>
			</Section>
		</MainLayout>
	);
};

const mapStatetoProps = (state) => {
	return {
		profile: state.reducer.profile,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		gettingData: function (tableName, type) {
			dispatch(gettingData(tableName, type));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);
