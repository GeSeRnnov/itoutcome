import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

export default function Order({ List, orderId, cType }) {
	const [form, setForm] = useState({
		type: cType || orderId || '',
		email: '',
		description: '',
		files: '',
	})

	useEffect(()=>{
		setForm({...form, type: orderId })
	},	[orderId])

	const handleChange = e => {
		const { name, value } = e.target
		setForm({...form, [name]: value })
	}

	const useHttp = params => {
		const { url, method, body } = params
		method === 'POST' && axios.post(url, {...body})
			.then(res => console.log('res', res))
			.catch(err => console.log('err', err))
	}

	const submit = () => {
		const url = 'http://localhost:3000/api/hello'
		const body = { ...form }
		const method = 'POST'
		useHttp({ url, body, method })
	}

	return <div className="container-fluid form my-3 py-1">
		<h3 className="py-2">{cType ? 'Отправить сообщение' : 'Заказать услугу:'}</h3>
		<div className="form-group">
			{
				!cType ? <>
				<label htmlFor="exampleFormControlSelect1">Тип услуги:</label>
				<select 
					className="form-control type-select" 
					name="type" 
					onChange={handleChange}
					value={form.type} 
					tabIndex="1"
				>
					<option value=""></option>
					{
						List.map(item => <option 
							value={item.id}
							key={item.id}
						>
							{item.title}
						</option>)
					}
				</select></> : ''
			}
		</div>

		<div>
			<label htmlFor="input">Имя:</label>
			<input 
				type="text" 
				name="name" 
				className="data-input"
				value={form.name} 
				onChange={handleChange}
				placeholder="Введите ваше имя" 
				tabIndex="2" 
			/>
		</div>

		<div>
			<label htmlFor="input">Email:</label>
			<input 
				type="text" 
				name="email" 
				className="data-input"
				value={form.email} 
				onChange={handleChange}
				placeholder="Введите email" 
				tabIndex="2" 
			/>
		</div>

		<div>
			<label htmlFor="textarea">Описание:</label>
			<textarea 
				cols="80" 
				rows="12" 
				className="desc-input"
				name="description" 
				onChange={handleChange}
				value={form.description} 
				tabIndex="3"
			/>
		</div>
		
		<div>
			<div 
				className="btn waves-effect waves-light my-3" 
				tabIndex="4"
				onClick={submit}
			>
				Отправить
			</div>
		</div>
		<style>{`
			label{
				color: #444;
			}
			.form-group{
				// height: 1.8em !important;
			    margin-bottom: 0 !important;
			    padding-bottom: 0 !important;
				color: #32373c;

			}
			.data-input{
				color: #32373c;
				border-bottom: 1px solid #ced4da !important;
				height: 1.5em !important;
			    padding: 0;
			    margin-bottom: .3em !important;
			}
			.desc-input{
				color: #32373c;
				border: 1px solid #ced4da;
    			border-radius: 3px;
    			min-height: 80px;
			}
			.desc-input:focus{
				color: #32373c;
				outline: none;
			}
			.form {
				border: 1px solid #ced4da;
				border-radius: 5px;
			}
			.btn {
				text-transform: none;
				background: #c9cad8 !important;
			}
		`}</style>
	</div>
};