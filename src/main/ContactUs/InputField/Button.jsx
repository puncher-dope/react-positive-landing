export default function Button({ isActive, id, ...props }) {
  return (
    <button id="id" className={isActive ? 'button active' : 'button'} {...props}></button>
  )
}