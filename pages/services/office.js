import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../layouts/MainLayout';
import CardsList from '../../components/CardsList';
import Order from '../../components/order';

export default function Office() {
	const [orderId, setOrderId]= useState('')
	
	useEffect(()=>{
		window.scrollTo({ top: 0 })
	},	[])

	const cntList = [
		{
			id: 'msOffice',
			title: 'MS Office',
			text: 'Офисный аутсорсинг специалистами с большим опытом работы.',
			ul: ['Работа с MS Excel, MS Word, MS Access и пр.', 'Создание расчетов, дашбордов, презентаций любой сложности. ', 'Техническая поддержка Вашего проекта.'],
			image: require('../../assets/img/office-ms.jpg'),
		},
		{
			id: 'vba',
			title: 'Vba макросы',
			text: '',
			ul: ['Автоматизация офисной рутины', 'программирование научных расчетов', 'макросы любой сложности', 'создание офисных CRM'],
			image: require('../../assets/img/office-vba.jpg'),
		},
		{
			id: 'uiPath',
			title: 'Роботизация бизнес-процессов',
			text: 'Проектирование и реализация ETL процессов с помощью инструмента UiPath.',
			ul: ['Загрузка данных из интернета', 'алгоритмизация и автоматизация процессов', 'преобразование данных', 'интеграция различных источников и хранилищ данных'],
			image: require('../../assets/img/office-uipath.jpg'),
		},
		{
			id: 'bi',
			title: 'Business Intelligence',
			text: 'Создание и проектирование OLAP кубов на вашем КТС или в облаке MS Azure. Инструменты MS BI.',
			ul: ['проектирование и модернизация кубов ', 'написание MDX запросов', 'вывод данных через инструмены BI либо в веб приложение', 'индивидуальный подход'],
			image: require('../../assets/img/office-olap.jpg'),
		},
	]

	return(
		<MainLayout>
			<div className="py-1">
				<h1 className="jumbotron display-3 text-center my-3 font-sm">
					Офисная автоматизация
				</h1>
				<div className="hr"></div>	
			</div>
			<div className="py-4">
				<p>
					Предлагаем Вам наши услуги в области офисной автоматизации. Мы специализируемся на небольших и средних проектах.
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