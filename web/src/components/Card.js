import CardPreview from "./CardPreview";
import Design from './Design';
import Fill from './Fill';
import Share from './Share';


function Card(props) {

    const handleChangeCollapse = (ev) => {
        ev.preventDefault();
        const legendId = ev.currentTarget.id;
        props.handleCollapse(legendId);
    };

    return (
        <>
            <header className="header">
                <h1 className="title--big">Awesome profile cards</h1>
            </header>

            <main className="page">
                <CardPreview dataCard={props.dataCard} />
                <form className="form fancy-border">

                    <Design
                        dataCard={props.dataCard}
                        dataResult={props.dataResult}
                        handleInput={props.handleInput}
                        collapseDesign={props.collapseDesign}
                        rotateDesign={props.rotateDesign}
                        handleChangeCollapse={handleChangeCollapse}
                    />

                    <Fill
                        dataCard={props.dataCard}
                        dataResult={props.dataResult}
                        handleInput={props.handleInput}
                        updateAvatar={props.updateAvatar}
                    />

                    <Share
                        dataCard={props.dataCard}
                        dataResult={props.dataResult}
                        handleClickCreateCard={props.handleClickCreateCard} />





                </form>
            </main>

            <footer className="footer">
                Awesome profile cards &#x1F952; &copy;2021
      <img className="footer__logo" src="./assets/images/logo-adalab.png" alt="Logo Adalab" />
            </footer>
        </>)

}

export default Card;