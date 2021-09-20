function AmazingNumberButton(props) {
    return(
        <section>
            <button type="button" className="buttons" onClick={props.handleClick} value={props.label}>{props.label}</button>
        </section>
    );
}

export default AmazingNumberButton;