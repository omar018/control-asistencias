import { useEffect, useState } from "react";


export function ListUser() {
    const userList: any[] = [
        {
            "id": "usr-001",
            "documento": "1001234567",
            "nombre": "Carlos Alberto",
            "apellido": "Rodríguez Gómez",
            "correo": "carodriguezg@unal.edu.co",
            "rol": "tutor",
            "carrera": "Ingeniería de Sistemas e Informática",
            "semestre": 8,
            "estado": "activo"
        },
        {
            "id": "usr-002",
            "documento": "1002345678",
            "nombre": "Mariana",
            "apellido": "López Zapata",
            "correo": "mlopezza@unal.edu.co",
            "rol": "tutor",
            "carrera": "Matemáticas",
            "semestre": 7,
            "estado": "activo"
        },
        {
            "id": "usr-003",
            "documento": "1003456789",
            "nombre": "Santiago",
            "apellido": "Martínez Restrepo",
            "correo": "smartinezr@unal.edu.co",
            "rol": "estudiante",
            "carrera": "Ingeniería Mecánica",
            "semestre": 3,
            "estado": "activo"
        },
        {
            "id": "usr-004",
            "documento": "1004567890",
            "nombre": "Valentina",
            "apellido": "Hernández Castro",
            "correo": "vhernandezc@unal.edu.co",
            "rol": "estudiante",
            "carrera": "Ingeniería Química",
            "semestre": 2,
            "estado": "activo"
        },
        {
            "id": "usr-005",
            "documento": "1005678901",
            "nombre": "David Esteban",
            "apellido": "Morales Parra",
            "correo": "dmoralesp@unal.edu.co",
            "rol": "estudiante",
            "carrera": "Ingeniería Civil",
            "semestre": 4,
            "estado": "activo"
        },
        {
            "id": "usr-006",
            "documento": "1006789012",
            "nombre": "Andrea Carolina",
            "apellido": "Ruiz Silva",
            "correo": "acruizs@unal.edu.co",
            "rol": "tutor",
            "carrera": "Física",
            "semestre": 9,
            "estado": "activo"
        },
        {
            "id": "usr-007",
            "documento": "1007890123",
            "nombre": "Camilo Andrés",
            "apellido": "Torres Vargas",
            "correo": "catorresv@unal.edu.co",
            "rol": "estudiante",
            "carrera": "Ingeniería Industrial",
            "semestre": 5,
            "estado": "activo"
        },
        {
            "id": "usr-008",
            "documento": "1008901234",
            "nombre": "Laura Sofía",
            "apellido": "Ospina Gutiérrez",
            "correo": "lsospinag@unal.edu.co",
            "rol": "estudiante",
            "carrera": "Ingeniería de Minas y Metalurgia",
            "semestre": 6,
            "estado": "activo"
        },
        {
            "id": "usr-009",
            "documento": "1009012345",
            "nombre": "Mateo Alejandro",
            "apellido": "Ramírez Peña",
            "correo": "maramirezp@unal.edu.co",
            "rol": "tutor",
            "carrera": "Estadística",
            "semestre": 8,
            "estado": "activo"
        },
        {
            "id": "usr-010",
            "documento": "1010123456",
            "nombre": "Isabela",
            "apellido": "Gómez Jaramillo",
            "correo": "igomezj@unal.edu.co",
            "rol": "estudiante",
            "carrera": "Arquitectura",
            "semestre": 1,
            "estado": "activo"
        },
        {
            "id": "usr-011",
            "documento": "1011234567",
            "nombre": "Daniel Felipe",
            "apellido": "Salazar Marín",
            "correo": "dfsalazarm@unal.edu.co",
            "rol": "estudiante",
            "carrera": "Ingeniería Agronómica",
            "semestre": 4,
            "estado": "activo"
        },
        {
            "id": "usr-012",
            "documento": "1012345678",
            "nombre": "Natalia Fernanda",
            "apellido": "Ríos Castaño",
            "correo": "nfriosc@unal.edu.co",
            "rol": "tutor",
            "carrera": "Ingeniería de Sistemas e Informática",
            "semestre": 10,
            "estado": "activo"
        }
    ];

    const [searchName, setSearchName] = useState<string>('');
    const [page, setPage] = useState<number>(0);
    const [size, setSize] = useState<number>(5);
    const [totalPages, setTotalPages] = useState<number>(0);

    const [appliedSearch, setAppliedSearch] = useState<string>('');

    const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const filteredUsers = userList.filter((user) => {
        if (!appliedSearch.trim()) return true;
        const query = appliedSearch.toLowerCase();
        const fullName = `${user.nombre} ${user.apellido}`.toLowerCase();
        return fullName.includes(query) || user.documento?.includes(query);
    });

    useEffect(() => {
        setTotalPages(Math.ceil(filteredUsers.length / size) || 0);
    }, [filteredUsers.length, size]);

    const displayedUsers = filteredUsers.slice(page * size, (page + 1) * size);

    // Handler preparado para cambiar el rol y mostrar la notificación
    const handleRoleChange = (userId: string, newRole: string) => {
        if (!newRole) return;
        // TODO: Al conectar backend, realizar petición PATCH/PUT a la API aquí
        setNotification({
            type: 'success',
            message: `Rol del usuario ${userId} actualizado correctamente.`
        });
        setTimeout(() => setNotification(null), 5000);
    };


    const goToNextPage = () => {
        if (page < totalPages - 1) {
            setPage(page + 1);
        }
    };

    const goToPrevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const changePageSize = (newSize: number) => {
        setSize(newSize);
        setPage(0);
    };


    return (
        <div className="d-flex p-10 rounded-5 mt-4" style={{ backgroundColor: "white", flexDirection: "column" }}>
            <div className="pb-6 d-flex justify-content-between">
                <div>
                    <p className="fs-5 text-neutral-50">Seguridad</p>
                    <h1 className="fs-2">Usuario</h1>
                </div>
            </div>

            <div className="filter-h pb-4" style={{ backgroundColor: "white" }}>
                <div className="d-flex w-100 justify-content-end" style={{ gap: '0.5rem' }}>
                    <div style={{ width: '280px' }}>
                        <div className="input-group w-100">
                            <span className="input-group-text start material-symbols-outlined"
                                translate="no">person</span>
                            <input
                                type="text"
                                className="form-control"
                                id="Input16"
                                name="Input16"
                                placeholder="Busca a un usuario"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        setAppliedSearch(searchName);
                                        setPage(0);
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary btn-icon w-100"
                            onClick={() => {
                                setAppliedSearch(searchName);
                                setPage(0);
                            }}
                        >
                            <span className="material-symbols-outlined" translate="no">search</span>
                        </button>

                    </div>
                </div>

            </div>

            <div className="table-responsive">
                <div>
                    <table className="table table-striped table-hover table-neutral">
                        <div className="text-sm text-secondary">Usuarios activos en el sistema</div>
                        <tbody className="table-group-divider">
                            {displayedUsers.map((user, index) => (
                                <tr key={user.id || index}>
                                    <td colSpan={2}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <div className="avatar avatar-mn avatar-primary"></div>
                                                <div className="px-2">
                                                    <p>{user.nombre} {user.apellido}</p>
                                                    <p className="fs-7 text-neutral-50">
                                                        {`Seguridad | ${user.ubicacion || user.carrera || "Administrador"}`}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="form-label required">Etiqueta</label>
                                                <div className="input-group">
                                                    <select
                                                        className="form-select"
                                                        id={`basic-${user.id}`}
                                                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                                    >
                                                        <option value="">Seleccione</option>
                                                        <option value="1" data-label="Ítem 1">Anfitrión</option>
                                                        <option value="2" data-label="Ítem 2">Dependencia</option>
                                                        <option value="3" data-label="Ítem 3">Super usuario</option>
                                                        <option value="4" data-label="Ítem 4">Administrador</option>
                                                    </select>
                                                    <div id="start-group" className="form-text">Nota explicativa de soporte</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <div className="fs-6 text-neutral-50">
                            Página {page + 1} de {totalPages}
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <label className="fs-6 text-neutral-50">Resultados por página:</label>
                            <select
                                className="form-select"
                                style={{ width: '80px' }}
                                value={size}
                                onChange={(e) => changePageSize(Number(e.target.value))}
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                            </select>
                            <div className="d-flex flex-column align-items-center gap-3">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination pagination-primary mb-0">
                                        <li className={`page-item ${page === 0 ? 'disabled' : ''}`}>
                                            <button
                                                className="page-link"
                                                onClick={goToPrevPage}
                                                disabled={page === 0}
                                                aria-label="Previous"
                                            >
                                                &laquo;
                                            </button>
                                        </li>
                                        {Array.from({ length: totalPages }, (_, i) => (
                                            <li key={i} className={`page-item ${page === i ? 'active' : ''}`}>
                                                <button
                                                    className="page-link"
                                                    onClick={() => setPage(i)}
                                                >
                                                    {i + 1}
                                                </button>
                                            </li>
                                        ))}
                                        <li className={`page-item ${page >= totalPages - 1 || totalPages === 0 ? 'disabled' : ''}`}>
                                            <button
                                                className="page-link"
                                                onClick={goToNextPage}
                                                disabled={page >= totalPages - 1 || totalPages === 0}
                                                aria-label="Next"
                                            >
                                                &raquo;
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* )} */}

            {notification && (
                <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1050, maxWidth: '400px' }}>
                    <div className={`alert ${notification.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                        <div className="alert-header">
                            <div className="alert-icon">
                                <span translate="no" className="material-symbols-outlined">
                                    {notification.type === 'success' ? 'check_circle' : 'error'}
                                </span>
                            </div>
                            <div className="alert-title">{notification.message}</div>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setNotification(null)}
                            ></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}