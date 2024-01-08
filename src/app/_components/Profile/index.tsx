const Profile = () => {
  return (
    <div>
      <picture>
        <source
          type='image/webp'
          srcSet={`/icon.png?fm=webp&fit=crop&w=48&h=48 1x, /icon.png?fm=webp&fit=crop&w=48&h=48&dpr=2 2x`}
        />
        <img src='/icon.png' alt='アイコン' width={50} height={50} />
      </picture>
      <span>柿</span>
    </div>
  );
};

export default Profile;
