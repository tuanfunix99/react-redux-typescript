interface Props {
  lists: string[];
}

const display = (lists: string[]) => {
  return lists.map((npm, key) => {
    return <li key={key}>{npm}</li>;
  });
};

const DisplayList: React.FC<Props> = ({ lists }) => {
  return <ul>{display(lists)}</ul>;
};

export default DisplayList;
