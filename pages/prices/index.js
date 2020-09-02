import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../layouts/MainLayout';

export default function Prices() {
	return(
		<MainLayout>
			<div className="py-1">
				<h1 className="jumbotron display-3 text-center my-3 font-sm">
					Два пути ценообразования 
				</h1>
				<div className="hr"></div>	
				
				
				<div className="row py-3">
					<div className="col-md-6 col-sm-12">
						<h4 className="display-4 text-center py-2 font-sm">Повременная</h4>
						<p className="redline">Вы ставите задачи, а мы их выполняем. Это вариант повременной оплаты, как если бы мы работали у Вас в штате. Минимальная стоимость часа разработчиков составляет 600 руб./час.</p>
						<span className="strong">Достоинства:</span>
						<ul className="list-ul">
							<li>Фиксированная стоимость часа, без дополнительных налоговых платежей (ПФР, ОМС)</li>
							<li>Возможность гибкокого управления расходами - платите тогда, когда есть работа.</li>
						</ul>
						<span className="strong">Недостатки:</span>
						<ul className="list-ul">
							<li>Ответственность за конечный результат на вашей стороне.</li>
						</ul>
						
					</div>
					<div className="col-md-6 col-sm-12">
						<h4 className="display-4 text-center py-2 font-sm">Сдельная</h4>
						<p className="redline">Мы заключаем договор, предварительно оценив риски, трудозатраты и совместно выработав коммерческое предложение с описанием результата, этапами, сроками, ограничениями и стоимостью работ.</p>
						<span className="strong">Достоинства:</span>
						<ul className="list-ul">
							<li>Ответственность за конечный результат целиком на нашей стороне.</li>
							<li>Фиксированные сроки и цена (могут изменяться только при изменении договора).</li>
						</ul>
						<span className="strong">Недостатки:</span>
						<ul className="list-ul">
							<li>Более высокая цена из-за учета недооценки трудозатрат.</li>
						</ul>
					</div>
				</div>

				<div className="row py-3 bm-5">
					<div className="col-md-12">
						<h4 className="display-4 text-center py-2 font-sm">Особенности работы и взаиморасчетов</h4>
						<ul className="list-ul">
							<li>Все взаиморасчеты и заключение договоров осуществляются с менеджером команды. Оценка необходимого количества и подключение дополнительных разработчиков осуществляется менеджером в соответствии с текущей ситуацией и по согласованию с заказчиком.</li>
							<li>Мы работаем как самозанятые без образования ИП/ООО.</li>
							<li>Периодическая отчетность о ходе выполнения (не реже 2 раз/нед.).</li>
						</ul>
					</div>
				</div>
				<div className="bm-5">
				</div>
			</div>
			<style>{`
				.redline{
					text-indent: 1.5em;
				}
				.strong{
					font-weight: bold;
				}
				.list-ul li{
					list-style-type: square !important;
					margin-left: 2em;
				}
			`}</style>
		</MainLayout>
	);
};