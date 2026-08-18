interface FooterConfig {
	dependencia: string;
	version: string;
}

const Footer = () => {
	const config: FooterConfig = {
		dependencia: import.meta.env.VITE_APP_DEPENDENCIA || "División Logística",
		version: import.meta.env.VITE_APP_VERSION || "26012026-DEV",
	};

	const currentYear = new Date().getFullYear();

	return (
		<footer className={`footer`}>
			<p className="copyright">© Copyright {currentYear} - Algunos Derechos Reservados</p>
			<div className="info-help">
				<p className="dependency">{config.dependencia}</p>
				<div className="vr"></div>
				<a
					className="help-link"
					href="https://gestionservicios.unal.edu.co/asmscustomer/index.html#/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Abrir portal de ayuda en nueva ventana"
				>
					<span className="material-symbols-outlined icon" translate="no">
						contact_support
					</span>
					<span className="text-decoration-underline">¿Necesitas ayuda?</span>
				</a>
			</div>
			<div className="more-info">
				<p>Versión {config.version}</p>
				<div className="vr"></div>
				<p>
					<a className="link-neutral-100" href="https://unal.edu.co/proteccion-de-datos-personales" target="_blank">
						Tratamiento de Datos Personales
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;