import React from "react";
import { ImFacebook, ImInstagram, ImTwitter, ImGithub } from "react-icons/im";
import { styled } from "styled-components";

const Footer = () => {
  return (
		<StyledFooter>
			<div>
				<h5>Hit us up on our socials!</h5>
				<div className={"iconWrapper"}>
					<div className={"icon"}>
						<a
							href='https://www.devmountain.com'
							target='_blank'>
							<ImFacebook
								size='1.5em'
							
								className={"iconHover"}
							/>
						</a>
					</div>
					<div className={"icon"}>
						<a
							href='https://www.devmountain.com'
							target='_blank'>
							<ImInstagram
								size='1.5em'
								
								className={"iconHover"}
							/>
						</a>
					</div>
					<div className={"icon"}>
						<a
							href='https://www.devmountain.com'
							target='_blank'>
							<ImTwitter
								size='1.5em'
								
								className={"iconHover"}
							/>
						</a>
					</div>
					<div className={"icon"}>
						<a
							href='https://www.devmountain.com'
							target='_blank'>
							<ImGithub
								size='1.5em'
								
								className={"iconHover"}
							/>
						</a>
					</div>
				</div>
			</div>
			<svg
				width='110'
				height='110'
				viewBox='0 0 512 512'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<circle
					cx='256'
					cy='256'
					r='248'
					stroke='#25AAE1'
					stroke-width='16'
				/>
				<path
					d='M255 222L203 132.5L83.9282 338H233L331 168L427.675 338.571L317.5 338.5'
					stroke='#25AAE1'
					stroke-width='16'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 150px;
	h5 {
		font-family: "Varela Round", sans-serif;
    font-weight:bolder;
    font-size: larger;
	}
	.iconWrapper {
		display: flex;
		flex-direction: row;
	}

	.icon {
		height: 50px;
		width: 50px;
	}
	.icon:hover .iconHover {
		color: white;
	}
	.icon:hover {
		background-color: black;
		border-radius: 50%;
	}
	.iconHover {
		color: #3f3f3f;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;