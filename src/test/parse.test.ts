import { expect, test } from 'vitest';

import { formatRichText } from '@/lib/parse';

test('formatRichText 正しくリッチテキストをフォーマットする', () => {
  const richText = `<pre><code>const hello = "world";</code></pre>`;
  const formattedText = formatRichText(richText);
  expect(formattedText).toContain('hljs');
});
