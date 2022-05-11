import { useEffect, useState } from 'react';

const ReposList = () => {
  const [info, setInfo] = useState(null);
  const [lang, setLang] = useState('');
  const handleSort = (a, b) => b.created_at.localeCompare(a.created_at);
  useEffect(() => {
    let sorted = null;
    let holder = null;
    fetch('http://localhost:4000/repos', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data.data2);
        holder = data.data2;
        sorted = holder.sort(handleSort);
        console.log(sorted);
        setInfo(sorted);
      });
  }, []);
  return (
    <>
      <div>
        <p>(Don't press these, they don't work.)</p>
        <button onClick={() => setLang('English')}>English</button>
        <button onClick={() => setLang('French')}>French</button>
        <button onClick={() => setLang('Typescript')}>Typescript</button>
      </div>
      <div>
        {lang === ''
          ? info &&
            info.map((el) => {
              return (
                <>
                  <div key={Math.floor(Math.random() * 123456789)}>
                    {el.full_name}
                  </div>
                  <div key={Math.floor(Math.random() * 123456789)}>
                    {el.language}
                  </div>
                  <div key={Math.floor(Math.random() * 123456789)}>
                    {el.description}
                  </div>
                  <div key={Math.floor(Math.random() * 123456789)}>
                    {el.forks_count}
                  </div>
                  {/* <div key={Math.floor(Math.random() * 123456789)}>
                  {el.created_at}
                </div> */}
                </>
              );
            })
          : lang === 'English'
          ? info &&
            //This filter function does not work.
            info.filter((el) => {
              console.log(el.language === 'English');
              return (
                el.language === 'English' && (
                  <>
                    <div key={Math.floor(Math.random() * 123456789)}>
                      {el.full_name}
                    </div>
                    <div key={Math.floor(Math.random() * 123456789)}>
                      {el.language}
                    </div>
                    <div key={Math.floor(Math.random() * 123456789)}>
                      {el.description}
                    </div>
                    <div key={Math.floor(Math.random() * 123456789)}>
                      {el.forks_count}
                    </div>
                  </>
                )
              );
            })
          : null}
      </div>
      <div>x</div>
    </>
  );
};

export default ReposList;
