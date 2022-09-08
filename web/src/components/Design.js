function Design(props) {

    const handleInput = (ev) => {
        const inputValue = ev.target.value;
        const inputName = ev.target.name;

        props.handleInput({
            value: inputValue,
            name: inputName
        });
    }

    return (
        <fieldset className="form__box js__section_desing">
            <legend
                id='id-design'
                onClick={props.handleChangeCollapse}
                className="form__heading js__title_design">


                <i className="far fa-object-ungroup" aria-hidden="true"></i>
                <h2>Diseña</h2>
                <i className="fas fa-chevron-up" aria-hidden="true"></i>
            </legend>

            <div className={`form__designinput ${props.collapseDesign}`}>
                <label>Colores</label>
                <ul className="form_paletteslist">
                    <li className="first_palette">
                        <label htmlFor="palette1">
                            <input
                                checked={props.dataCard.palette === "1"}
                                onChange={handleInput}
                                id="palette1"
                                type="radio"
                                name="palette"
                                className="js_radio js_radio-1 input_palette"
                                value="1" />
                        Paleta 1
                        <div className="colorOne palette"></div>
                            <div className="colorTwo palette"></div>
                            <div className="colorThree palette"></div>
                        </label>
                    </li>

                    <li className="second_palette">
                        <label htmlFor="palette2">
                            <input
                                id="palette2"
                                onChange={handleInput}

                                checked={props.dataCard.palette === "2"}
                                type="radio"
                                name="palette"
                                className="js_radio js_radio-2 input_palette"
                                value="2" />
                                Paleta 2
                        <div className="colorOne palette"></div>
                            <div className="colorTwo palette"></div>
                            <div className="colorThree palette"></div>
                        </label>
                    </li>

                    <li className="third_palette">
                        <label htmlFor="palette3">
                            <input
                                id="palette3"
                                onChange={handleInput}

                                type="radio"
                                checked={props.dataCard.palette === "3"}
                                name="palette"
                                className="js_radio js_radio-3 input_palette"
                                value="3" />
                        Paleta 3
                        <div className="colorOne palette"></div>
                            <div className="colorTwo palette"></div>
                            <div className="colorThree palette"></div>
                        </label>
                    </li>
                </ul>

            </div>
        </fieldset>
    )
}
export default Design;