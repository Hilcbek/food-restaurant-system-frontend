import React from 'react';

export interface IModal {
  open: boolean;
  headerTitle?: string;
  BodyContent: React.ComponentType;
  FooterContent?: React.ComponentType;
  onClose: () => void;
}
