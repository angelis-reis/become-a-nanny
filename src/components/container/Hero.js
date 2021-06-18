import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
	Experiment,
	Variant,
	emitter,
	experimentDebugger
} from '@marvelapp/react-ab-test';
import Mixpanel from 'mixpanel';
import styled from 'styled-components';
import ImgHero from '../../images/ImageHeader.png';
import VariantA from '../../ABtest/VariantA';
import VariantB from '../../ABtest/VariantB';
import MixpanelToken from '../../sensitive/MixpanelToken';

experimentDebugger.enable();
emitter.defineVariants('hapuHeroABTest', ['variant-a', 'variant-b'], [33, 33]);
const mixpanel = Mixpanel.init(MixpanelToken);

// Called when the experiment is displayed to the user.
emitter.addPlayListener((experimentName, variantName) => {
	console.log(
		`Displaying experiment ${experimentName} variant ${variantName}`
	);
});

// Called when a 'win' is emitted, in this case by this.refs.experiment.win()
emitter.addWinListener((experimentName, variantName) => {
	console.log(
		`Variant ${variantName} of experiment ${experimentName} was clicked`
	);
	mixpanel.track(`${experimentName} ${variantName}`, {
		name: experimentName,
		variant: variantName
	});
});

const HeroStyle = styled.section`
	height: 616px;
	display: grid;
	justify-items: center;
	background: linear-gradient(175deg, #5912ac, #7e49c3, #c86dd7),
		url(/Image.png);
	object-fit: cover;
	background-blend-mode: overlay;
	background-size: cover;
	place-self: center stretch;

	.hero-content {
		display: grid;
		width: 1184px;
		grid-template-columns: 1fr 1fr;
		color: #ffffff;
	}
	.hero-text {
		margin-top: 200px;
	}
	.img-hero {
		width: 316px;
		height: 290px;
		margin-right: 100px;
		margin-top: 170px;
		justify-self: end;
	}

	@media screen and (max-width: 1000px) {
		height: 540px;
		background-position: left 756px bottom 0px ;


		.hero-content {
			display: grid;
			width: 328px;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			color: #ffffff;
			margin-top: 0px;
		}
		.hero-text {
			margin-top: 152px;
		}
		.img-hero {
			display: none;
		}
	}
`;

const Hero = () => {
	const onLinkClick = (e) => {
		emitter.emitWin('hapuHeroABTest');
	};

	return (
		<HeroStyle>
			<Router>
				<div className='hero-content'>
					<div className='hero-text'>
						<Experiment name='hapuHeroABTest'>
							<Variant name='variant-a'>
								<VariantA clickAction={onLinkClick} />
							</Variant>
							<Variant name='variant-b'>
								<VariantB clickAction={onLinkClick} />
							</Variant>
						</Experiment>
					</div>
					<img
						className='img-hero'
						src={ImgHero}
						alt="Hapu's Console"
					/>
				</div>
			</Router>
		</HeroStyle>
	);
};
export default Hero;
