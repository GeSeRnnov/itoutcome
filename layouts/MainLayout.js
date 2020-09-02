import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/Link'
import { useRouter } from 'next/router'

const navListInit = {
	0: {
		link: '/', 
		title: 'Главная'
	},
	1: {
		link: '/services', 
		title: 'Услуги',
		showSub: false,
		subList: {
			10: { link: '/services/web-dev', title: 'Web разработка' },
			11: { link: '/services/office', title: 'Офисная автоматизация' },
			12: { link: '/services/database-maintaining', title: 'Поддержка БД' },
		}
	},
	// 2: {
	// 	link: '/examples', 
	// 	title: 'Примеры',
	// },
	3: {
		link: '/prices', 
		title: 'Цены',
	},
	4: {
		link: '/contacts', 
		title: 'Контакты'
	},
}

export default function MainLayout({ children }) {
	const [navList, setNavList] = useState(navListInit);
	const [hasScrollUp, setHasScrollUp] = useState(false)
	const router = useRouter()
	const pageRoute = router.route

	useEffect(() => {
		const scrollWatcher = () => {
			window.addEventListener('scroll', handleScroll)
		}
		return scrollWatcher;
	},[])

	const menuToggler = (id, val) => {
		if(navList[id].subList) { 
			const newList = {...navList}
			newList[id].showSub = val
			setNavList(newList)
		}
	}
	
	const handleMouseOver = (e) => {
		const target = e.target
			let id = target && target.dataset && target.dataset.id || 0
			if(id){
				id = id.toString().slice(0, 1)
				menuToggler(id, true)
			}
	}
	
	const handleMouseOut = (e) => {
		const target = e.target
		const rTarget = e.relatedTarget
		let id = target && target.dataset && target.dataset.id
		let rId = rTarget && rTarget.dataset && rTarget.dataset.id
		if(id){
			id = id.toString().slice(0, 1)
			rId = rId && rId.toString().slice(0, 1)
			const isSame = rId === id
			if(!isSame) {
				menuToggler(id)
			} 
		}
	}

	const scrollTop = () => window.scrollTo(0, 0)

	const handleScroll = (e) => {
		const scrollY = e.path[1].scrollY
		if(scrollY > 100 && !hasScrollUp) {
			setHasScrollUp(true);
		} else {
			setHasScrollUp(false);
		}
	}

	return <div>
		<nav className='navbar navbar-expand-md navbar-dark bg-dark text-right'>
			<div className="container-fluid">
				<ul className="navbar-nav ml-auto"> 
					{
						Object.entries(navList).map(nEntry => {
							const [nId, nav] = nEntry
							const showClass = nav.showSub ? 'show-smooth' : ''
							
							return nav.subList ? <li 
								className="nav-item" 
								key={nId}
								onMouseOver = {handleMouseOver} 
								onMouseOut = {handleMouseOut}
							>
									<Link href={nav.link || ''}>
										<a 
											className="nav-link" 
											data-id={nId}
										>{nav.title}</a>
									</Link>
									{
			        			<div 
			        				className={`dropdown-menu ${showClass}`} 
			        				aria-labelledby="navbarDropdown"
									data-id={nId}
			        			>
											{
												Object.entries(nav.subList).map(sEntry => {
													const [sId, sub] = sEntry
													return <Link href={sub.link}  key={sId}>
														<a 
															className="dropdown-item"
															data-id={sId}
															onMouseOver={handleMouseOver} 
														>{sub.title}</a>
													</Link>
												})
											}
				        		</div>
									}
							</li> :
							<li 
								className="nav-item" 
								key={nId}
								onMouseOver={handleMouseOver} 
								onMouseOut = {handleMouseOut}
							>
									<Link href={nav.link}>
										<a className="nav-link" data-id={nId}>{nav.title}</a>
									</Link>
							</li>
						})
					}
				</ul> 
			</div>
		</nav>
		
		<div className="container">
			{ children }
		</div>

		<footer className="footer">
			<div className="row">
				<div className="col-sm-6 col-md-6">
					{
						Object.entries(navList).map(nEntry => {
							const [nId, nav] = nEntry
							const showClass = nav.showSub ? 'show-smooth' : ''
							
							return +nId < 3? <li 
								className="footer-item" 
								key={nId}
								onMouseOver={handleMouseOver} 
								onMouseOut = {handleMouseOut}
							>
									<Link href={nav.link}>
										<a className="nav-link2" data-id={nId}>{nav.title}</a>
									</Link>
							</li> : ''
						})
					}
				</div>
				<div className="col-sm-6 col-md-6">
		          {
						Object.entries(navList).map(nEntry => {
							const [nId, nav] = nEntry
							const showClass = nav.showSub ? 'show-smooth' : ''
							
							return +nId >= 3? <li 
								className="footer-item" 
								key={nId}
								onMouseOver={handleMouseOver} 
								onMouseOut = {handleMouseOut}
							>
									<Link href={nav.link}>
										<a className="nav-link2" data-id={nId}>{nav.title}</a>
									</Link>
							</li> : ''
						})
					}
				</div>
			</div>
        </footer>
        {hasScrollUp ? <div className="scroll-up" onClick={scrollTop}>
        	&uarr;
        </div> : ''}
        <style>{`
			.row{
				margin-right: 0px;
				margin-left: 0px;
			}		
			.footer{
				background: #343a40;
				width: 100%;
	      	}
	      	.row{
	      		margin-bottom: 0px !important;
	      	}
	      	.footer-item{
	      		list-style-type: none;
	      		line-height: 2.5em;
	      	}
	      	.scroll-up{
	      		width: 1.2em;
	      		height: 1.2em;
	      		opacity: .7;
      		    position: fixed;
			    top: 80%;
			    right: 5%;
			    background: #585b8a;
			    border-radius: 50%;
			    display: flex;
			    justify-content: center;
			    align-items: center;
			    color: white;
			    font-size: 2em;
			    padding: 2px;
			    font-weight: 900;
			    cursor: pointer;
	      	}
		`}</style>
	</div>
};



// https://www.upwork.com/
// https://mesto.co/
// https://angel.co/
// https://codecanyon.net/