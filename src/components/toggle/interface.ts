import React from "react";

export interface ToggleRootProps {
  className?: string,
  variant?: 'default' | 'highlight',
  intent?: 'primary' | 'secondary' | 'warning' | 'danger' | 'neutral' | 'accent' | 'success',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export interface ToggleIconProps {
  className?: string,
  children: React.ReactNode
}