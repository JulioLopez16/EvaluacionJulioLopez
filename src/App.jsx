import { useState } from "react";

const App = () => {

  /* VARIABLES */
    const [destino, setDestino] = useState("");
    const [cantidadPersonas, setCantidadPersonas] = useState("");
    const [diasEstadia, setDiasEstadia] = useState("");
    const [presupuestoDiarioP, setPresupuestoDiarioP] = useState("");
    const [resultado, setResultado] = useState(null);
    const [estado, setEstado] = useState("");

    const calcular = (e) => {
        e.preventDefault();

        if (!destino || !cantidadPersonas || !diasEstadia || !presupuestoDiarioP) {
            alert("¡Debe escribir en todos los campos!");
            return;
        }

        const costoTotal = cantidadPersonas * diasEstadia * presupuestoDiarioP;

        let clasificacion = "";

        if (costoTotal > 1500000) {
            clasificacion = "Presupuesto Elevado";
        } else if (costoTotal >= 800000) {
            clasificacion = "Presupuesto Moderado";
        } else {
            clasificacion = "Viaje Accesible";
        }

        setResultado(costoTotal);
        setEstado(clasificacion);
    };

    const limpiar = () => {
        setDestino("");
        setCantidadPersonas("");
        setDiasEstadia("");
        setPresupuestoDiarioP("");
        setResultado(null);
        setEstado("");
    };

    const obtenerColor = () => {
        if (estado === "Presupuesto Elevado") return "danger";
        if (estado === "Presupuesto Moderado") return "warning";
        if (estado === "Viaje Accesible") return "secondary";
        return "primary";
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-header bg-info bg-gradient text-white rounded-top-4 py-3 text-center">
                            <h3 className="mb-0 fw-bold">
                                🌴 Simulador de Presupuesto de Viaje
                            </h3>
                        </div>

                        <div className="card-body p-4">
                            <form onSubmit={calcular}>
                                <div className="mb-3">
                                    <label className="form-label text-secondary fw-semibold">
                                        🛩️ Destino:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg border-info"
                                        value={destino}
                                        onChange={(e) =>
                                            setDestino(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-secondary fw-semibold">
                                        👤 Número de personas:
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg border-info"
                                        value={cantidadPersonas}
                                        onChange={(e) =>
                                            setCantidadPersonas(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-secondary fw-semibold">
                                        🌞 Días de estadía:
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg border-info"
                                        value={diasEstadia}
                                        onChange={(e) =>
                                            setDiasEstadia(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label text-secondary fw-semibold">
                                         💸Presupuesto diario por persona ($):
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg border-info"
                                        value={presupuestoDiarioP}
                                        onChange={(e) =>
                                            setPresupuestoDiarioP(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="d-flex gap-3 justify-content-center">
                                    <button
                                        className="btn btn-info bg-gradient text-white fw-bold px-5 rounded-pill shadow-sm"
                                        type="submit"
                                    >
                                        Calcular
                                    </button>

                                    <button
                                        className="btn btn-outline-secondary fw-bold px-4 rounded-pill shadow-sm"
                                        type="button"
                                        onClick={limpiar}
                                    >
                                        Limpiar
                                    </button>
                                </div>
                            </form>

                            {resultado !== null && (
                                <div
                                    className={`alert alert-${obtenerColor()} mt-4 shadow-sm rounded-4 border-0`}
                                >
                                    <h5 className="alert-heading fw-bold text-center mb-3">🎫 Resultado de la Simulación</h5>

                                    <p className="mb-1">
                                        <strong>Destino:</strong> {destino}
                                    </p>

                                    <p className="mb-1">
                                        <strong>
                                            Costo Total Estimado:
                                        </strong>{" "}
                                        ${resultado.toLocaleString("es-CL")}
                                    </p>

                                    <p className="mb-0">
                                        <strong>Categoría:</strong> {estado}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;