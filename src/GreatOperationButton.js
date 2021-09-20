function GreatOperationButton(props) {
  return <button className="operation" onClick={props.handleClick} value={props.label}>{props.label}</button>;
}
export default GreatOperationButton; 