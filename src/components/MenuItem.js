import {useEffect, useState} from 'react';
import { Link, useMatch } from 'react-router-dom';

import styles from './MenuItem.module.scss';

const MenuItem = ({title, url}) => {
	const [isClicked, setIsClicked] = useState(false);
	const [isHided, setIsHided] = useState(false);
  
	const match = useMatch(url);

	useEffect(() => {
		if (match) {
			setIsClicked(true);
			setTimeout(() => {
				setIsHided(true); 
			}, 1000);
		} else {
			setIsClicked(false);
			setIsHided(false);
		}
	}, [match]);
  
	return <Link className={isClicked ? styles.linkHided : styles.link} style={{display: isHided ? 'none' : 'block'}} to={url}>{title}</Link>;
};

export default MenuItem;