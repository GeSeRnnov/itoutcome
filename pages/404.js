import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../layouts/MainLayout';

export default function Prices() {
	return(
		<MainLayout>
			Undefined here
			<div id="__next">
				<div className="err_container">
					<div>
						<h1 className="err_h1">404</h1>
						<div className="err_h2_wrapper" >
							<h2 className="err_h2">This page could not be found.</h2>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

					// <style>body { margin: 0 }</style>
<style>{`
	err_container {
		color:#000;
		background:#fff;
		font-family:-apple-system, BlinkMacSystemFont, Roboto, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Avenir, &quot;Helvetica Neue&quot;, &quot;Lucida Grande&quot;, sans-serif;
		height:100vh;
		text-align:center;
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content:center;
	}
	err_h2_wrapper {
		display:inline-block;
		text-align:left;
		line-height:49px;
		height:49px;
		vertical-align:middle;
	}
	err_h1 {
		display:inline-block;
		border-right:1px solid rgba(0, 0, 0,.3);
		margin:0;
		margin-right:20px;
		padding:10px 23px 10px 0;
		font-size:24px;
		font-weight:500;
		vertical-align:top;
	}
	err_h2 {
		font-size:14px;
		font-weight:normal;
		line-height:inherit;
		margin:0;
		padding:0;
	}
`}</style>

