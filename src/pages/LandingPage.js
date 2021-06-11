import React from 'react';

import Hero from '../components/container/Hero';
import Booking from '../components/container/Booking';
import Share from '../components/container/Share';
import NewsLetter from '../components/container/NewsLetter';
import Payments from '../components/container/Payments';
import Framework from '../components/container/Framework';
import Billing from '../components/container/Billing';
import Diary from '../components/container/Diary';
import Host from '../components/container/Host';
import Footer from '../components/container/Footer';

function LandingPage() {
	return (
		<>
			<Hero />
			<Booking />
			<Share />
			<NewsLetter />
			<Payments />
			<Framework />
			<Billing />
			<Diary />
			<Host />
			<Footer />
		</>
	)
};

export default LandingPage;
