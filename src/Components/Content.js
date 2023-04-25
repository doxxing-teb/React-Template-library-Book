import React from 'react'

function Content() {
  return (
    <section id='Home' className='Content'>
      <br />
      <h1>Books Of Computers</h1>
      <p className='Description'>
        Fass Books is a web page with a list of books on computers and hardware. <br />
        its advantage is its discounted prices and the ease of moving around the <br />
        site without annoying registrations and an easy purchase.
      </p>
      <form action='#Library'>
        <button className='View'>View The Library</button>
      </form>
      <br/>
    </section>
  );
}

export default Content;