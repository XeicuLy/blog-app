import hljs from 'highlight.js';
import { JSDOM } from 'jsdom';

export const formatRichText = (richText: string) => {
  const dom = new JSDOM(richText);
  const document = dom.window.document;
  const elements = document.querySelectorAll('pre code');
  elements.forEach((elm) => {
    try {
      const classAttr = elm.getAttribute('class');
      let res;
      if (classAttr && /^language-/.test(classAttr)) {
        const language = classAttr.replace(/^language-/, '');
        res = hljs.highlight(elm.textContent || '', { language });
      } else {
        res = hljs.highlightAuto(elm.textContent || '');
      }
      elm.innerHTML = res.value;
    } catch (error) {
      console.error('highlight error:', error);
    }
  });
  return dom.serialize();
};
