function CardPreview(props) {

    return (<section className="preview fancy-border">
        <button><i className="far fa-trash-alt" aria-hidden="true"></i> Reset</button>
        <article className="js_preview preview__card fancy-border">
            <div className="preview__header">
                <h2 className="preview__name js__preview_name">
                    {props.dataCard.name || `Nombre y Apellidos`}
                </h2>
                <h3 className="preview__job js__preview_job">  {props.dataCard.job || `Front-end developer`}</h3>
            </div>
            <div className="preview__photo js__profile-image"></div>

            <nav>
                <a className="preview__icon" href=".">
                    <i className="fas fa-phone"></i>
                </a>
                <a className="preview__icon js__preview_email" href=".">
                    <i className="far fa-envelope"></i>
                </a>
                <a className="preview__icon" href=".">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="preview__icon" href=".">
                    <i className="fab fa-github-alt"></i>
                </a>
            </nav>
        </article>
    </section>);
}

export default CardPreview;