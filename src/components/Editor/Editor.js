import React from 'react';

import './Editor.css';

export default function Editor({ setTitle, setSub, setBody }) {
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleSub = (event) => {
    setSub(event.target.value);
  };
  const handleBody = (event) => {
    setBody(event.target.value);
  };

  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" onChange={handleTitle} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input type="text" onChange={handleSub} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div className="radio-group">
          <label>
            <input name="align" type="radio" value="left" />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input name="align" type="radio" value="center" />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input name="align" type="radio" value="right" />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea style={{ height: '250px' }} onChange={handleBody} />
        <label>Text</label>
      </div>
    </div>
  );
}
