const Header = () => {
	//const appName = import.meta.env.VITE_APP_NAME || "Control de Porterías";

	return (
		<header className="m-0">
			<div className="section-icon">
				<div className="banner-container">
					<a href="https://unal.edu.co/" target="_blank" rel="noopener" className="icon-link">
						<img
							src="https://gestionapp.medellin.unal.edu.co/cdn/assets/images/logo_unal_circle.png"
							alt="Escudo Universidad Nacional de Colombia"
						/>
					</a>
				</div>
			</div>

			<div id="divider-top"></div>

			<div id="section-menu-middle">
				<div className="padded-container">
					<p id="name-aplication">control asistencias</p>
				</div>
			</div>
		</header>
	);
};

export default Header;