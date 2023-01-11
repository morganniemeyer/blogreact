import React, { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Title');
  const [subtitle, setSub] = useState('subtitle');
  const [body, setBody] = useState('Post shows here');
  const [font, setFont] = useState('font');
  const [align, setAlign] = useState('align');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, body, font, align }} />
      <Editor {...{ setTitle, setSub, setBody, setFont, setAlign }} />
    </main>
  );
}
