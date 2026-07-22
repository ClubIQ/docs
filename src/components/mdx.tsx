import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import type { MDXComponents } from 'mdx/types';
import { createElement } from 'react';
import {
  CheckItem,
  Checklist,
  CodeRef,
  DecisionBlock,
  FileRef,
  InfoCallout,
  ModulePermissionTable,
  NoteCallout,
  PermissionGateCallout,
  RiskBlock,
  RouteRef,
  WarningCallout,
} from '@/components/docs-primitives';
import { cn } from '@/lib/cn';

const BaseCard = defaultMdxComponents.Card as any;
const BaseCards = defaultMdxComponents.Cards as any;
const BaseCallout = defaultMdxComponents.Callout as any;
const BaseCalloutContainer = defaultMdxComponents.CalloutContainer as any;

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Tab,
    Tabs,
    Accordion,
    Accordions,
    ImageZoom,
    Checklist,
    CheckItem,
    InfoCallout,
    NoteCallout,
    WarningCallout,
    PermissionGateCallout,
    RouteRef,
    FileRef,
    CodeRef,
    DecisionBlock,
    RiskBlock,
    ModulePermissionTable,
    Card: (props: any) =>
      createElement(BaseCard, {
        ...props,
        className: cn('clubiq-card', props.className),
      }),
    Cards: (props: any) =>
      createElement(BaseCards, {
        ...props,
        className: cn('clubiq-cards-grid', props.className),
      }),
    Callout: (props: any) =>
      createElement(BaseCallout, {
        ...props,
        className: cn('clubiq-callout', props.className),
      }),
    CalloutContainer: (props: any) =>
      createElement(BaseCalloutContainer, {
        ...props,
        className: cn('clubiq-callout', props.className),
      }),
    Steps: (props: any) =>
      createElement(Steps, {
        ...props,
        className: cn('clubiq-steps', props.className),
      }),
    Step: (props: any) =>
      createElement(Step, {
        ...props,
        className: cn('clubiq-step', props.className),
      }),
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
