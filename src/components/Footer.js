import React from 'react';

export default function Footer() {
  return (
    <div
      style={{ textAlign: 'center', marginTop: '3rem' }}
    >{`Created by Andriol Jaupaj. © ${new Date().getFullYear()}`}</div>
  );
}
