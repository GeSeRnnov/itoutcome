import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../layouts/MainLayout';
import styles from '../../styles/Home.module.scss'
import router from 'next/router'

export default function Services() {

	const cards = [
		{
			id: 0, 
			title: 'Web разработка', 
			text: 'Создание современных сайтов и поддержка существующих, а также мобильных и веб приложений.', 
			link: '/services/web-dev'
		},
		{
			id: 1, 
			title: 'Офисная автоматизация', 
			text: 'Реализация офисных систем автоматизации на основе MS Office, создание независимых CRM систем, в т.ч. облачных.', 
			link: '/services/office'
		},
		{
			id: 2, 
			title: 'Поддержка БД', 
			text: 'Проектирование новых и модернизация существующих баз данных.', 
			link: '/services/database-maintaining'
		},
	]
	
	const cardClick = url => router.push(url)

	return(
		<MainLayout>
  		<div>
				<div className="container-fluid">
		  		<div className="py-3">
						<div className="jumbotron my-5">
							<p className="display-4 text-center py-3 font-sm">
								Наши аутсорсинговые услуги помогут Вам сэкономить ваши время и деньги.
							</p>							
						</div>
		  		</div>

					<div className="display-4 text-center my-5 py-3">
						Предлагаем Вам следующие группы услуг:
					</div>

					<div className="row my-5 cards-row">
						{
							cards.map(card => <div className="col-xs-12 col-md-4" key={card.id}>
									<div className="card" onClick={()=>cardClick(card.link)}>
										<div className="card-body">
											<h5 className="card-title">{card.title}</h5>
											<hr />
											<p className="card-text">
												{card.text}
											</p>
										</div>
									</div>
								</div>
							)
						}
					</div>
				</div>
			</div>
			<style>{`
				.card{
					cursor: pointer;
				}
				h5 {
					font-weight: 600 !important;
					text-align: center;
				}
				.card{
					min-height: 15em;
				}
				.cards-row{
					padding-bottom: 30vh;
				}
				.card-text{
					text-align: justify;
				}
			`}</style>
		</MainLayout>
	);
};