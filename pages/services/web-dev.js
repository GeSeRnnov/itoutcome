import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../layouts/MainLayout';
import CardsList from '../../components/CardsList';
import Order from '../../components/order';


export default function WebDev() {
	const [orderId, setOrderId]= useState('')
	
	useEffect(()=>{
		window.scrollTo({ top: 0 })
	},	[])

	const cntList = [
		{
			id: 'landings',
			title: 'Сайты визитки',
			text: 'Если у Вас есть свое дело, но нет своего сайта - не упустите возможность создать страничку в интернете, которая расскажет о Вас и вашем деле.',
			image: require('../../assets/img/web-visitka.jpg'),
		},
		{
			id: 'shops',
			title: 'Информационные сайты и интернет магазины.',
			text: 'Создаем сайты на CMS или разработаем их для вас с нуля. ',
			image: require('../../assets/img/web-shop.jpg'),
		},
		{
			id: 'webApp',
			title: 'Веб приложения',
			text: 'Разработаем веб приложение по вашим ТЗ. Мы используем самые современные инструменты разработки.',
			image: require('../../assets/img/web-app.jpg'),
		},
		{
			id: 'mobileApp',
			title: 'Мобильные приложения',
			text: 'Расширьте зону своего присутствия и увеличьте количество пользователей с помощью мобильных приложений.',
			image: require('../../assets/img/web-mobile-app.jpg'),
		},
	]

	


	return(
		<MainLayout>
			<div className="py-1">
				<h1 className="jumbotron display-3 text-center my-3 font-sm">
					Web разработка
				</h1>
				<div className="hr"></div>	
			</div>
			<div className="py-4">
				<p>
					Предлагаем Вам наши услуги в области Web разработки. Мы специализируемся на небольших и средних проектах.
				</p>
			</div>

			<CardsList List={cntList} cb={setOrderId} />
			
			<div className="row order">
				<Order List={cntList} orderId={orderId} />
			</div>
			
			<style>{`
				.order{
					padding: 30px 0px;
				}
			`}</style>

		</MainLayout>
	);
};

