import React from "react";

function Home() {
  return (
    <React.Fragment>
      {[...new Array(122)].map(
        () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
      )}
    </React.Fragment>
  );
}

export default Home;
