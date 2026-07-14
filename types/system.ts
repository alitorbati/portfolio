import type { ElementType, ReactNode } from "react";
import type {
  ColorProps,
  SpaceProps,
  LayoutProps,
  BorderProps,
  BackgroundProps,
  FlexboxProps as SsFlexboxProps,
  GridProps as SsGridProps,
  TypographyProps,
} from "styled-system";

/**
 * Foundation (Box/Text/Flexbox/Grid) components are used polymorphically via the
 * `as` prop — with framer-motion components, next/link, and raw DOM tags — so they
 * accept an open set of passthrough props. Known styled-system props stay typed;
 * the index signature is the single, scoped escape hatch that lets `as` targets
 * bring their own props without per-call casts.
 */
export interface PolymorphicProps {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  [key: string]: unknown;
}

export type BoxSystemProps = ColorProps &
  SpaceProps &
  LayoutProps &
  BorderProps &
  BackgroundProps &
  SsFlexboxProps;

export interface BoxProps extends BoxSystemProps, PolymorphicProps {
  _hover?: BoxSystemProps;
  _focus?: BoxSystemProps;
}

export interface TextProps
  extends ColorProps,
    SpaceProps,
    TypographyProps,
    PolymorphicProps {}

export interface FlexboxProps
  extends SsFlexboxProps,
    LayoutProps,
    PolymorphicProps {}

export interface GridProps extends SsGridProps, LayoutProps, PolymorphicProps {}
