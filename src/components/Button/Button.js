import './Button.css'

const Button = ({name, link, newpage, type}) => {
  return (
    <a href={link} target={newpage?'_blank':'_self'} rel='noreferrer'>
      <button className='btn' type={type}>{name}</button>
    </a>
  )
}

export default Button
