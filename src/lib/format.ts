import hljs from 'highlight.js';
import { JSDOM } from 'jsdom';

const getLanguageFromClassName = (className: string | null) => {
  if (className && /^language-/.test(className)) {
    return className.replace(/^language-/, '');
  }
  return null;
};

const highlightCode = (code: string, language: string | null) => {
  if (language && hljs.getLanguage(language)) {
    return hljs.highlight(code, { language });
  }
  return hljs.highlightAuto(code);
};

export const formatRichText = (richText: string) => {
  const dom = new JSDOM(richText);
  const document = dom.window.document;
  const elements = document.querySelectorAll('pre code');

  elements.forEach((elm) => {
    try {
      const language = getLanguageFromClassName(elm.getAttribute('class'));
      const res = highlightCode(elm.textContent || '', language);
      elm.innerHTML = res.value;
    } catch (error) {
      console.error('highlight error:', error);
    }
  });

  return dom.serialize();
};
