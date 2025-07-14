import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
export { a as AuthView, A as AuthViewPaths, b as authViewPaths } from './auth-view-paths-Ctk94WJ-.js';

interface EmailTemplateClassNames {
    body?: string;
    button?: string;
    container?: string;
    image?: string;
    content?: string;
    footer?: string;
    heading?: string;
    hr?: string;
    link?: string;
}
interface EmailTemplateProps {
    classNames?: EmailTemplateClassNames;
    action?: string;
    /** @default process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL */
    baseUrl?: string;
    content: ReactNode;
    heading: ReactNode;
    /** @default `${baseUrl}/apple-touch-icon.png` */
    imageUrl?: string;
    preview?: string;
    /** @default process.env.SITE_NAME || process.env.NEXT_PUBLIC_SITE_NAME */
    siteName?: string;
    url?: string;
    /** @default "vercel" */
    variant?: "vercel";
}
declare const EmailTemplate: ({ classNames, action, baseUrl, content, heading, imageUrl, preview, siteName, variant, url }: EmailTemplateProps) => react_jsx_runtime.JSX.Element;

export { EmailTemplate, type EmailTemplateClassNames, type EmailTemplateProps };
