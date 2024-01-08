'use client';

import { useCallback, useRef, useState } from 'react';

const SearchField = () => {
  const [composing, setComposition] = useState(false);
  const startComposition = () => setComposition(true);
  const endComposition = () => setComposition(false);
  const _onEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === 'Enter' && !composing) {
        location.href = `/search?q=${inputRef.current?.value}`;
      }
    },
    [composing],
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const url = new URL(location.href);
  return (
    <input
      type='search'
      name='q'
      ref={inputRef}
      placeholder='Search...'
      onKeyDown={_onEnter}
      onCompositionStart={startComposition}
      onCompositionEnd={endComposition}
      defaultValue={url.searchParams.get('q') || ''}
    />
  );
};

export default SearchField;
