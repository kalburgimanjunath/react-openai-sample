import React from 'react';
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap';
export default function CardGroup() {
  return (
    <CardGroup>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Product Description</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Generate Product Description
          </CardSubtitle>
          <CardText>
            Generate Product Description with any type of text,keywords or
            phrases.
          </CardText>
          <Button href="./product">Generate</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Marketing Emails</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Generate Marketing Emails
          </CardSubtitle>
          <CardText>Generate Marketing Emails</CardText>
          <Button href="./emails">Generate</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Creating Tweets</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Createing Tweets
          </CardSubtitle>
          <CardText>
            Createing Tweets is a wider card with supporting text below as a
            natural lead-in to additional content. This card has even longer
            content than the first to show that equal height action.
          </CardText>
          <Button href="./tweets">Generate</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
}
