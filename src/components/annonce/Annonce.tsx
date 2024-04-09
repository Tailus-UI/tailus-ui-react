import React from "react";
import { annonceRoot, annonceConcern, type AnnonceRootProps, type AnnonceConcernProps } from "@tailus/themer";

export interface AnnonceRootVariantsProps extends AnnonceRootProps {
  className?: string;
  href?: string;
  children: React.ReactNode;
}

export const AnnonceRoot: React.FC<AnnonceRootVariantsProps> = ({
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

export interface AnnonceConcernVariantsProps extends React.HTMLAttributes<HTMLSpanElement>, AnnonceConcernProps{
  className?: string,
  children: React.ReactNode,
}

export const AnnonceConcern: React.FC<AnnonceConcernVariantsProps> = (({
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
