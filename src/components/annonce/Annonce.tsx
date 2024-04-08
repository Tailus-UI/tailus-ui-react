import React from "react";
import { annonceRoot, annonceConcern, type AnnonceRootVariants, type AnnonceConcernVariants } from "@tailus/themer";

export interface AnnonceRootProps extends AnnonceRootVariants {
  className?: string;
  href?: string;
  children: React.ReactNode;
}

export const AnnonceRoot: React.FC<AnnonceRootProps> = ({
  className,
  href,
  variant = "outlined",
  size = "md",
  children,
  ...props
}) => {
  const Component = href ? "a" : "div";

  return (
    <Component 
      href={href} 
      className={annonceRoot({variant, size, className})} 
      {...props}
    >
      {children}
    </Component>
  );
};

export interface AnnonceConcernProps extends React.HTMLAttributes<HTMLSpanElement>, AnnonceConcernVariants{
  className?: string,
  children: React.ReactNode,
}

export const AnnonceConcern: React.FC<AnnonceConcernProps> = (({
  className,
  intent = 'primary',
  size = 'md',
  children,
  ...props 
}) => (
  <span 
    className={annonceConcern({intent, size, className})} 
    {...props}
  >
    {children}
  </span>
));

export interface AnnonceMessageProps {
  className?: string,
  children: React.ReactNode,
}

export const AnnonceMessage: React.FC<AnnonceMessageProps> = (({
  className,
  children,
  ...props
}) => (
  <p 
    className={className} 
    {...props}
  >
    {children}
  </p>
));
