"use client"


function Button({className, mt, children}: {className: string, mt?: string, children: React.ReactNode}) {
  return (
    <button className={className} mt={mt}>{children}</button>
  )
}

export default Button