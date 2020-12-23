import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Portal = ({ id = 'modal', children, className }) => {
	let rootElement = document.getElementById(id);
	if (rootElement === null) {
		// 찾는id 요소가 없을 경우 새로 만들어서 body에 넣기
		rootElement = document.createElement('div');
		rootElement.setAttribute('id', id);
		document.body.appendChild(rootElement);
		document.body.style.overflow = 'hidden';
	}
	rootElement.setAttribute('class', className);

	useEffect(() => {
		return () => {
			const getRootElement = document.getElementById(id);
			if (getRootElement !== null) document.body.removeChild(getRootElement);
			document.body.style.overflow = '';
		};
	}, []);

	return createPortal(children, rootElement);
};

const Modal = ({ id, children }) => {
	const StyleModal = styled(Portal)`
		background-color: rgba(var(--jb7, 0, 0, 0), 0.5);
		bottom: 0;
		justify-content: space-between;
		left: 0;
		overflow-y: auto;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 1;
	`;
	return <StyleModal id={id}>{children}</StyleModal>;
};

export default Modal;
