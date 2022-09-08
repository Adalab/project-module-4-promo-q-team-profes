function Share(props) {


    return (
        <fieldset className="form__box">
            <legend className="form__heading">
                <i className="fas fa-share-alt" aria-hidden="true"></i>
                <h2>Comparte</h2>
                <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </legend>

            <div className="form__shareinput">

                <button className="js_create_button" onClick={props.handleClickCreateCard}>
                    <i className="far fa-address-card" aria-hidden="true"></i>
                Crear tarjeta
             </button>

                <a className="form__link" href=".">
                    {props.dataResult.success === true ? props.dataResult.cardUrl : "Falta algún atributo, vuelva a intentarlo"}
                </a>
            </div>
        </fieldset>
    );
}
export default Share;