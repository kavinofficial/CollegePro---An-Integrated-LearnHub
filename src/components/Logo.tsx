import { cn } from '@/lib/utils'
import * as React from 'react'

import logo from "../assets/images/college-pro-logo.png"


type LogoProps = {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img src={logo} className={cn('size-8',className)} alt="" />
  )
}

type LogoTextProps = {
  className?: string
  logoClassName?: string
}

export const LogoWithText: React.FC<LogoTextProps> = ({ className, logoClassName }) => {
  return (
    <div className={cn('flex items-center text-lg font-medium', className)}>
      <Logo className={logoClassName} />
      <span>ollegePro</span>
    </div>
  )
}
