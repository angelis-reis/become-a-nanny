import React from 'react';

import styled from 'styled-components';

const FooterStyle = styled.div`
	background-color: red;
	height: 140px;
	/* width: 1440px; */
	left: 0px;
	top: 0px;
	border-radius: 0px;
	border: 2px solid black;
	background: #ffffff;
`;

function Footer() {
	return (
		<FooterStyle>
			<h1>Footer</h1>
		</FooterStyle>
	);
}

export default Footer;
