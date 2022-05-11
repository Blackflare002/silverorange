const ReposList = () => {
  fetch('/repos')
    .then((res) => res.json())
    .then((data) => {
      console.log('data', data);
    });
  return <div>x</div>;
};

export default ReposList;
