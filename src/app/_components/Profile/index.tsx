const Profile = () => {
  return (
    <div className='flex'>
      <div className='h-16 w-16'>
        <picture>
          <source
            type='image/webp'
            srcSet={`/icon.png?fm=webp&fit=crop&w=48&h=48 1x, /icon.png?fm=webp&fit=crop&w=48&h=48&dpr=2 2x`}
          />
          <img src='/icon.png' alt='アイコン' width={64} height={64} />
        </picture>
      </div>
      <div className='ml-6 flex items-center'>
        <span className='text-gray-700'>柿</span>
      </div>
    </div>
  );
};

export default Profile;
