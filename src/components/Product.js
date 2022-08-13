import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
export default function Product() {
  const [heading, setHeading] = useState();
  const [response, setResponse] = useState();
  const submitData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const response = openai
      .createCompletion({
        model: 'text-davinci-002',
        prompt: 'generate hello world alternative',
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((res) => {
        // res.json();
        setResponse(res.data.choices[0].text);
      });
    // console.log(data);
    setHeading(`AI product description suggesstion form : ${data.productName}`);
    // setResponse(`The response will be shown here:`);
  };
  return (
    <div>
      <h1>Product Description</h1>
      <div>
        <Form onSubmit={submitData}>
          <FormGroup>
            <Label for="productName">Product Description</Label>
            <Input
              id="productName"
              name="productName"
              placeholder="Enter Product Name"
              type="text"
            />
          </FormGroup>
          <Button type="submit">Fetch</Button>
        </Form>
      </div>
      <div>
        <div>{heading}</div>
        <div>{response}</div>
      </div>
    </div>
  );
}
