// Button component
const Button = ({ btnClass, title, onClick }:  Button ) => {
  return (
    <button onClick={onClick} className={`btn ${btnClass}`}>{title}</button>
  )
}

export default Button