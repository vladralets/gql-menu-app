import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMenuUpload } from './hooks/useMenuUpload';
import './App.css';

import Menu from './components/Menu';
import Page from './pages/Page';

function App() {
	const [menuItems, setMenuItems] = useState();

	const {data, loading, error} = useMenuUpload();

	useEffect(() => {
		setMenuItems(data?.menuItems.data);
	}, [data]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error</div>;
	}

	return (
		<BrowserRouter>
			<div className="App">
				{menuItems && <Menu items={menuItems}/>}
			</div>
			<main>
				<Routes>
					{!menuItems && <Route path="/" element={<div>Loading...</div>} />}
					{menuItems && menuItems.map((item) => (
						<Route
							key={item.attributes.url}
							path={item.attributes.url}
							element={<Page title={item.attributes.title} />}
						/>
					))}
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
