import React, { useState } from "react";
import * as PropTypes from "prop-types";
import { Box, Button, Input, Text } from "@chakra-ui/react";

class MyInput extends React.Component {
  render() {
    let { address: address, onChange: onChange } = this.props;
    return (
      <Box>
        <Input />
      </Box>
    );
  }
}

MyInput.propTypes = {
  address: PropTypes.any,
  onChange: PropTypes.any,
};

class MyText extends React.Component {
  render() {
    let { props } = this.props;
    return (
      <Box>
        <Text>address</Text>
        <Button onClick={onclick}>Change Button</Button>
      </Box>
    );
  }
}

MyText.propTypes = { props: PropTypes.any };

function App({ props }) {
  const [address, setAddress] = useState("");
// lift state up 부모에 올려놓았으니 prop으로 받아서 사용해라
  return (
    <div>
      <MyInput value={value} onChange={(text) => setAddress(text)} />
      <MyText value={address} />
      <hr/>
      <MyInput address={email} onChange={(text) => setEmail(text)} />
      <MyText address={email} />

    </div>
  );
}

export default App;
