import React from "react";
import "./cont.css";
import i from "./laptop.png";
function Cont() {
	return (
		<div className="main">
			<div className="heading_text">
				Lorem ipsum dolor sit amet. Hic omnis quae quae qui beatae dolores est
				omnis .
			</div>
			<div className="subheading">
				"Lorem ipsum dolor sit amet. Sit reprehenderit similique non soluta
				provident qui labore sequi."
			</div>
			<div className="sign">
				<button className="signup">sign up for free</button>
			</div>
			<div className="already">Already have an account? LogIn</div>
			<div className="Img1">
				<img src={i} alt="" srcset="" />
				<div className="highlight">
					<div className="high1 one">
						<h3>Lorem ipsum</h3>
						<br />
						Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Hic quae
						quae qui beatae dolores est omnis reprehenderit est.
					</div>
					<div className="high1">
						<h3>Lorem ipsum</h3>
						<br />
						Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Hic quae
						quae qui beatae dolores est omnis reprehenderit est.
					</div>
				</div>
			</div>
		</div>
	);
}
export default Cont;
