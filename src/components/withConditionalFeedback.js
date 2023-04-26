export  const withConditionalFeedback = (Component) => (props) => {

  console.log('with conditinal feedback')

  if (props.isLoading) return <div>Loading data.</div>;
  if (!props.blogs) return <div>No data loaded yet.</div>;
  if (!props.blogs.length) return <div>Data is empty.</div>;

  return <Component {...props} />;
};
