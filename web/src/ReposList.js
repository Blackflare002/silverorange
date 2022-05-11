import { useEffect, useState } from 'react';

const ReposList = () => {
  const [info, setInfo] = useState(null);
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
        {info &&
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
                <div key={Math.floor(Math.random() * 123456789)}>
                  {el.created_at}
                </div>
              </>
            );
          })}
      </div>
      <div>x</div>
    </>
  );
};

export default ReposList;
