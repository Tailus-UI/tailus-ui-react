import {createContext} from "react";

export type Appearance = {
  variant: 'default' | 'highlight',
  intent: 'primary' | 'secondary' | 'warning' | 'danger' | 'neutral' | 'accent' | 'success',
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const defaultAppearance: Appearance = {
  variant: 'default',
  intent: 'accent',
  size: 'md'
}

export const AppearanceContext = createContext(defaultAppearance);