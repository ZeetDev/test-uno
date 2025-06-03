"use client"

function Button({className, mt = "49", children}: {className: string, mt?: string, children: React.ReactNode}) {
  return (
    <button className={className} mt={mt}>{children}</button>
  )
}

export default Button