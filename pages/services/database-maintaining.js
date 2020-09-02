import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../layouts/MainLayout';
import CardsList from '../../components/CardsList';
import Order from '../../components/order';

export default function ВatabaseMaintaining() {
	const [orderId, setOrderId]= useState('')
	
	useEffect(()=>{
		window.scrollTo({ top: 0 })
	},	[])
	
	const cntList = [
		{
			id: 'dbDev',
			title: 'Разработка БД',
			text: 'Проектирование архитектуры реляционных БД с учетом всех требований заказчика.',
			ul: ['SQL Server', 'MySql', 'Postgres'],
			image: require('../../assets/img/db-create.jpg'),
		},
		{
			id: 'dbMaintain',
			title: 'Поддержка существующих БД.',
			ul: ['написание SQL запросов.', 'опримизация view и хранимых процедур', 'рефакторинг баз данных'],
			image: require('../../assets/img/db-maintain.jpg'),
		},
		{
			id: 'noSql',
			title: 'No SQL базы данных',
			ul: ['Mongo DB', 'Firebase'],
			image: require('../../assets/img/db-nosql.jpg'),
		},
	]

	return(
		<MainLayout>
			<div className="py-1">
				<h1 className="jumbotron display-3 text-center my-3 font-sm">
					Разработка и поддержка баз данных
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
