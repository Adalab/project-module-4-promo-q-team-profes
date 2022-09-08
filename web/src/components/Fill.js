
import GetAvatar from './GetAvatar';


function Fill(props) {

    const handleInput = (ev) => {
        const inputValue = ev.target.value;
        const inputName = ev.target.name;

        props.handleInput({
            value: inputValue,
            name: inputName
        });
    }

    return (
        <fieldset className="form__box">
            <legend className="form__heading js__title_fill">
                <i className="far fa-keyboard" aria-hidden="true"></i>
                <h2>Rellena</h2>
                <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </legend>
            <div className="form__fillinput">
                <ul className="js__allInputs">
                    <li className="form__item">
                        <label htmlFor="name">Nombre completo</label>
                        <input
                            className="js_input js_name"
                            type="text"
                            name="name"
                            id="name"
                            value={props.dataCard.name}
                            onChange={handleInput}
                            placeholder="Ej: Sally Jill" />
                    </li>
                    <li className="form__item">
                        <label htmlFor="job">Puesto</label>
                        <input
                            className="js_input js_job"
                            type="text"
                            name="job"
                            id="job"
                            value={props.dataCard.job}
                            onChange={handleInput}
                            placeholder="Ej: Front-end unicorn" />
                    </li>

                    <li className="form__item--photo fancy-border bdr-red">
                        <label className="form__photolabel" htmlFor="photo">Imagen de perfil</label>
                        <label htmlFor="photo" className="form__photobutton js__profile-trigger">Añadir imagen</label>

                        <input
                            className="form__photoinput js__profile-upload-btn"
                            type="file"
                            name="photo"
                            id="photo" />




                        <span className="form__photothumb js__profile-preview"></span>
                    </li>

                    <li className="form__item">

                        <label htmlFor="email">Email</label>

                        <input
                            className="js_input js_email"
                            type="text"
                            name="email"
                            id="email"
                            value={props.dataCard.email}
                            onChange={handleInput}
                            placeholder="Ej. sally.hill@email.com" />

                    </li>
                    <li className="form__item">
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            className="js_input"
                            type="text"
                            name="phone"
                            id="phone"
                            value={props.dataCard.phone}
                            onChange={handleInput}
                            placeholer="Ej. 555-55-55-55" />
                    </li>
                    <li className="form__item">
                        <label htmlFor="linkedin">Linkedin</label>
                        <input
                            className="js_input"
                            type="text"
                            name="linkedin"
                            value={props.dataCard.linkedin}
                            onChange={handleInput}
                            id="linkedin"
                            placeholder="Ej. linkedin.com/in/sally-hill" />
                    </li>
                    <li className="form__item">
                        <label htmlFor="github">Github</label>
                        <input
                            className="js_input"
                            type="text"
                            name="github"
                            id="github"
                            value={props.dataCard.github}
                            onChange={handleInput}
                            placeholder="Ej. @Sally-Hill" />
                    </li>
                </ul>
            </div>
        </fieldset>
    );
}
export default Fill;