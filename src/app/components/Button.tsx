"use client"
import clsx from 'clsx';

function Button({className, mt, children}: {className: string, mt?: string, children: React.ReactNode}) {
  return (
    <button className={clsx(className, `mt-[${mt}px]`)}>{children}</button>
  )
}

export default Button