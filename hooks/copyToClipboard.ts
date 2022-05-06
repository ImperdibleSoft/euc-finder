import { useState } from 'react';

type CopyState = 'idle' | 'success' | 'error'

export const useCopyToClipboard = (callback?: () => void) => {
  const canCopy = !!navigator?.clipboard?.writeText;
  const [copied, setCopied] = useState<CopyState>('idle');

  const handleCopy = (text: string) => {
    if (canCopy) {
      try {
        navigator.clipboard.writeText(text);
        setCopied('success');
        callback?.();
      } catch {
        setCopied('error');
      }
    }
  };

  return {
    canCopy,
    copied,
    handleCopy
  };
};
