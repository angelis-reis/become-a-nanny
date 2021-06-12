import React from 'react';
import styled from 'styled-components';

const HeroStyle = styled.div`
	/* backdrop-filter: grayscale(1); */
	height: 616px;

	/* background: linear-gradient(175deg, #5912ac, #7e49c3, #c86dd7),
		url(https://s3-alpha-sig.figma.com/img/17eb/3037/a8afc96eccb6f1885700ab5d6e2e58ef?Expires=1624233600&Signature=FHsxic-Bp1zNtfKlKuWor75XVzZqhkvNdXUNjI826IVsU~fK2bxHCYRxeun7u8t0xp6PoHNuZ7iJlEIE~HBJIX~wAvuGKAza59aZewFA1N5ZRuUHu7SwtggKYwKy~Kpdr1KIRoljcihlcxTUZIhSJ2xaEGoutQHJo2UkQRzkKafG~vityj8yLIEMuDHzOXZCV4a3CoEffgtPoQdWTVyyXzmaXPc0K7~XJseWBHwMZB~giCZD6irn0hr5ds9pMJb52UStdu9sMiSCO0e7a0EnpvSj3Vn52EhNcGz4sVdMiH0RwHeH-VgSmUB4cKhCfF79Ok9vJLE-aOh0ZI82k~DgbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA); */

	background-image: linear-gradient(175deg, #5912ac, #7e49c3, #c86dd7);


	background-blend-mode: darken;
	object-fit: cover;

	mix-blend-mode: darken;
	/* background-blend-mode: darken, */

	/* width: 1440px; */
	/* background-blend-mode: overlay 20%; */

	background-size: cover;
	/* opacity: 90%; */
	/* mix-blend-mode: overlay; */
	left: 0px;
	top: 0px;
	border-radius: 0px;
	/* border: 2px solid black; */
	place-self: center stretch;
`;

function Hero() {
	return (
		<HeroStyle>
			{/* <h1>Hero</h1> */}
		</HeroStyle>
	);
}

export default Hero;
