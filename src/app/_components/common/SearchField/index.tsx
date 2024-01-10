'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

import { Input } from '@/app/_components/ui/input';

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
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get('q') || '';

  return (
    <div className='relative'>
      <Input
        type='search'
        name='q'
        ref={inputRef}
        placeholder='タグを検索する'
        onKeyDown={_onEnter}
        onCompositionStart={startComposition}
        onCompositionEnd={endComposition}
        defaultValue={defaultQuery}
        className='pl-8' // アイコンの幅に応じて調整
      />
      <HiOutlineSearch className='absolute left-1.5 top-1/2 -translate-y-1/2 transform' />
    </div>
  );
};

export default SearchField;
