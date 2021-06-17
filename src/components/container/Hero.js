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
import ImgHeader from '../../images/ImageHeader.png';
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
	left: 0px;
	top: 0px;
	border-radius: 0px;
	place-self: center stretch;

	.hero-content {
		display: grid;
		width: 1184px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 300px;
		color: #ffffff;
		margin-top: 170px;
	}
	.hero-text {
		place-self: center;
		width: 560px;
	}
	.img-header {
		place-self: end;
		width: 316px;
		height: 290px;
		padding-bottom: 20px;
		margin-right: 100px;
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
						className='img-header'
						src={ImgHeader}
						alt="Hapu's Console"
					/>
				</div>
			</Router>
		</HeroStyle>
	);
};
export default Hero;
