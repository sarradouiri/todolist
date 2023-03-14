import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Addtask from './Addtask';
import Listtask from './Listtask';

const TodoList = () => {
  const [filter, setfilter] = useState(false);

  const handelFilter = () => setfilter(!filter);

  const Items = useSelector((state) => state);
  return (
    <Container>
      <Addtask handelFilter={handelFilter} filter={filter} />
      <Listtask items={filter ? Items.filter((el) => el.isDone) : Items} />
    </Container>
  );
};

export default TodoList;