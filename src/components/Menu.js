import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const Menu = ({items}) => {
	return (
		<div className={styles.container}>
			<div className={styles.navContainer}>
				{items.map(item => <MenuItem 
					key={item.attributes.url} 
					title={item.attributes.title} 
					url={item.attributes.url} 
				/>)}
			</div>
		</div>
	);
};

export default Menu;
