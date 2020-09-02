import React from 'react';
import PropTypes from 'prop-types';

export default function CardsList({ List, cb }) {
	const handleOrder = (id) => {
		if(cb) cb(id);
		scrollTo();
	}

	const scrollTo = () => {
		const body = document.body
		const html = document.documentElement
		const maxHeight = Math.max(body.scrollHeight, body.offsetHeight, 
			html.scrollHeight, html.offsetHeight, html.clientHeight)
		window.scrollTo(0, maxHeight)		
	}

	return <>
		{
			List.map((item, id) => <div className="row web-row my-5 py-5" key={item.id}>
				<div className="col-md-6 col-xs-12 ">
						{	
							id % 2 === 0 ? <>
									<h3 className="title">{item.title}</h3>					
									{item.text}
									{item.ul ? <ul className="list-ul">
										{item.ul.map((li, lid) => <li className="list-li" key={lid}>{li}</li>)}
									</ul> : ''}
									<div className="d-flex justify-content-start">
										<div 
											className="btn waves-effect waves-light my-5"
											onClick={()=>handleOrder(item.id)}
										>
											Заказать
										</div>
									</div>
								</> : 
								item.image ? 
									<img src={item.image} /> : 
									''
						}
						
				</div>
				<div className="col-md-6 col-xs-12 ">
					{	
						id % 2 !== 0 ? <>
								<h3 className="title">{item.title}</h3>					
								{item.text}
								{item.ul ? <ul className="list-ul">
									{item.ul.map((li, lid) => <li className="list-li" key={lid}>{li}</li>)}
								</ul> : ''}
								<div className="d-flex justify-content-end">
									<div 
										className="btn waves-effect waves-light my-5"
										onClick={()=>handleOrder(item.id)}
									>
										Заказать
									</div>
								</div>
							</> : 
							item.image ? 
								<img src={item.image} /> : 
								''
					}
				</div>				
			</div>)
		}
		<style>{`
			.web-row{
				box-shadow: 0px 1px 4px 0px #2d2230;
				border-radius: 5px;
			}
			img{
				// height: 300px;
				width: 100%;
			}
			.btn {
				text-transform: none;
				background: #c9cad8 !important;
			}
			.list-li{
			    list-style-type: square !important;
			    line-height: 2em;
		        margin-left: 2em;
			}
			.title{
				width: 100%;
			    border-bottom: 1px solid lightgray;
			    margin-bottom: 1em;
			    padding-bottom: .5em;
			}
		`}</style>
	</>
};