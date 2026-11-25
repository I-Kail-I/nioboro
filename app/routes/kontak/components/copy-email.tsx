import { useState } from 'react';

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="border-background/20 text-background/60 hover:border-background/40 hover:text-background focus-visible:outline-background rounded-xs border px-2.5 py-1.5 font-sans text-[0.625rem] font-semibold tracking-[0.14em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span aria-live="polite" className={copied ? 'text-primary' : undefined}>
        {copied ? 'Tersalin' : 'Salin email'}
      </span>
    </button>
  );
}
