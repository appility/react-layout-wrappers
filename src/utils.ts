import React, { HTMLProps } from 'react';
import { ReactElement } from 'react';

import { SequenceWrapperProps } from './types';

export const createFlexDirectionCalculator = (
  defaultProps: SequenceWrapperProps
) => (props: SequenceWrapperProps) =>
  (props.orientation || defaultProps.orientation) === 'vertical'
    ? 'column'
    : (props.direction || defaultProps.direction) === 'right-to-left'
      ? 'row-reverse'
      : 'row';
/**
 * Put keys and ids on all the elements
 */
export const addKeysAndIdsWithPrefixToElements = (prefix: string) => (
  elements: ReadonlyArray<ReactElement<HTMLProps<HTMLElement>>>
) =>
  elements.map((element, index) =>
    React.cloneElement(element, {
      ...element.props,
      key: `${prefix}-${index}`,
      id: `${prefix}-${index}`,
    })
  );

/**
 * Convert a given spacing value to a string format suitable for assigning to a
 * CSS property (e.g. height).
 * @param value Value to convert
 */
export const formatSpacingValue = (value?: number | string) =>
  !!value
    ? isNaN(parseInt(value.toString(), 10)) ? value : `${value}px`
    : undefined;

export const valueOrDefault = (defaultValue: string) => (value?: {}) =>
  value === undefined ? defaultValue : value;
