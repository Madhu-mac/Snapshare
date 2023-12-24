import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

const mainStyle = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};
export const EmailTemplate = ({ response }) => {
  console.log('Response Data:', response); // Log the response for debugging

  return (
    <Html>
      <Head />
      <Preview> snapShare recent login</Preview>
      <Body style={mainStyle}>
        <Container>
          {/* <Section>
            <Img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ss-_DpyLLIrfLQJfQp8zzfpdpDWAgpPn4Q&usqp=CAU`} />
          </Section> */}

          <Section>
            <Img width={620} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ss-_DpyLLIrfLQJfQp8zzfpdpDWAgpPn4Q&usqp=CAU`} />

            <Row style={{ padding: '20px 40px' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Hi {response?.emailToSend.split('@')[0]},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {response.userName} shared a file with you
                </Heading>

                    {/* <Text>
                    <b>File Name: {response?.name}</b>
                  </Text>
                  <Text>
                    <b>File Size: {response?.Size}</b>
                  </Text>
                  <Text>
                    <b>File Type: {response?.Type}</b>
              </Text> */}

                <Text>
                  Now you can also share files with SnapShare.
                </Text>
                <Text style={{ marginTop: -5 }}>
                  Click the button below to access your files.
                </Text>
              </Column>
            </Row>
            
            {/* <a href={response?.shortUrl}>Click here to Download</a> */}
            <Row style={{ padding: "2px", margin: "2px"}}>
              <Column>
                <Button style={Button}
                href={response?.shortUrl}>
                  Click here to Download
                </Button>
              </Column>
            </Row>
          </Section>

          {/* <Section style={{ padding: '45px 0 0 0' }}>
            <Img width={620} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ss-_DpyLLIrfLQJfQp8zzfpdpDWAgpPn4Q&usqp=CAU`} />
          </Section> */}

          <Text style={{ textAlign: 'center', fontSize: 12, color: 'rgb(0,0,0, 0.7)' }}>
            © 2022 | snapShare Inc., 
          </Text>
        </Container>
      </Body>
    </Html>
  );
};
