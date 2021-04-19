import { Component, FC, ReactNode } from 'react'
import s from './EntityGrid.module.css'

interface Props {
  className?: string
  children?: ReactNode[] | Component[] | any[]
  layout?: 'A' | 'B' | 'C' | 'D' | 'normal'
  variant?: 'default' | 'filled'
}

const EntityGrid: FC<Props> = ({ className, layout = 'A', children }) => (
  <div className={s.root}>{children}</div>
)

export default EntityGrid
