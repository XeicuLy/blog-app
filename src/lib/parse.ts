import hljs from 'highlight.js';
import { JSDOM } from 'jsdom';

export const formatRichText = (richText: string) => {
  const dom = new JSDOM(richText);
  const document = dom.window.document;
  const elements = document.querySelectorAll('pre code');
  elements.forEach((elm) => {
    try {
      if (elm.textContent !== null) {
        const res = hljs.highlightAuto(elm.textContent);
        elm.innerHTML = res.value;
      }
    } catch (error) {
      console.error('highlightAuto error:', error);
    }
  });
  return dom.serialize();
};
