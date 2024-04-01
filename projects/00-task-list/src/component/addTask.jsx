import '../css/addTask.css'

export const AddTask = () => {
    return (
        <>
            <div className="content">
                <h2>Agrega una Tarea pendiente Aquí</h2>
                <p>
                    Agrega todas las tareas que necesites y luego ve marcandolas
                    a medida que vayas completando!
                </p>
                <input type="text" placeholder="Tu tarea aqui"/>
            </div>
        </>
    )
}