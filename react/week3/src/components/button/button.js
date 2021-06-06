import "./button.css";

function Button({ props, onClick }) {

    const { name, value } = props;

    const clicked = () => {
        onClick(value);
    }

    return (
        <button onClick={clicked.bind(this)} >{name}</button>
    )
}

export default Button;

