import { useEffect, useState } from 'react';

const ReposList = () => {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/repos', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data.data2);
        setInfo(data.data2);
      });
  }, []);
  return (
    <>
      <div>
        {info &&
          info.map((el) => {
            return <div>{el.id}</div>;
          })}
      </div>
      <div>x</div>
    </>
  );
};

export default ReposList;
