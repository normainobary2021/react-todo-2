/* eslint-disable */
import React, { useState } from 'react';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle('');
    } else {
      alert('Please add a TODO');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add a TODO..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">
        ➕
      </button>
    </form>
  );
};

export default InputTodo;
