'use client'
type ButtonProps = {
  onClick: () => void
  label: string
}

const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <button onClick={onClick} className="flex bg-gold-brand px-4 py-1">
      <picture className=" flex justify-center">
        <img src="/img/button-icon.svg" alt="black" />
      </picture>
      <span className="text-black btn">
        {label}
      </span>
    </button>
  )
}

export default Button