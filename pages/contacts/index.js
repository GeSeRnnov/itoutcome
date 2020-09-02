import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Order from '../../components/order';

export default function Contacts() {
	return(
		<MainLayout>
			<h3 className="py-4">Обратная связь</h3>
			
			<div className="py-3">
				<p>При возникновении вопросов, замечаний и пожеланий - пишите нам и мы свяжемся с вами.</p>
				<p>Благодарим за обратную связь.</p>
				
			</div>
			<div className="row order">
				<Order cType='common'/>
			</div>
			<style>{`
				.order{
					padding: 30px 0px;
				}
			`}</style>
		</MainLayout>
	);
};