import React from 'react';
import '../styles/PreLoader.css';

function PreLoader({ style }) {
	document.title = 'مشاورین املاک نارمک';
	return (
		<div className="preloader" style={style}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}

export default PreLoader;
