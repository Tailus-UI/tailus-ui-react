import { annonce, softAnnonce } from "@tailus/themer-annonce";
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import React from "react";

export type AnnonceRootVariantProps = VariantProps<typeof annonceRootVariant>;
const annonceRootVariant = cva('', {
  variants: {
    variant: {
      outlined: annonce.root,
      soft: softAnnonce.root
    },
  }
});

export interface AnnonceRootProps extends AnnonceRootVariantProps {
  className?: string;
  href?: string;
  children: React.ReactNode;
}

export const AnnonceRoot: React.FC<AnnonceRootProps> = ({
  className,
  href,
  variant = "outlined",
  children,
  ...props
}) => {
  const Component = href ? "a" : "div";

  return (
    <Component 
      href={href} 
      className={cn(annonceRootVariant({ variant: variant }), className)} 
      {...props}
    >
      {children}
    </Component>
  );
};

export interface AnnonceConcernProps {
  className?: string,
  intent?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'accent' | 'gray' | 'neutral',
  children: React.ReactNode,
}

export const AnnonceConcern: React.FC<AnnonceConcernProps> = (({
  className,
  intent = 'primary',
  children,
  ...props 
}) => (
  <span 
    className={cn(annonce.concern[intent], className)} 
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
  <span 
    className={cn(annonce.message, className)} 
    {...props}
  >
    {children}
  </span>
));
