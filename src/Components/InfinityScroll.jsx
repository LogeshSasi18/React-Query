import React from "react";

const fetchItems = ({ pageParams }) => {
  return axios.get(`http://localhost:3001/items?_limit=10&_page=${pageParams}`);
};

const InfinityScroll = () => {
  const { data, isLoaing } = useQuery({
    queryKey: ["items"],
    queryFn: fetchItems,
  });

  return (
    <div>
      <h2>InfinityScroll</h2>
    </div>
  );
};

export default InfinityScroll;
