import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { AiOutlineEye } from "react-icons/ai";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const list = [
    {
      title: "Women's Clothing Store",
      img: "/portfolio1.jpeg",
      
    },
    {
      title: "Tech Accessories Store",
      img: "/portfolio2.jpeg",
      
    },
    {
      title: "Men's Clothing Store",
      img: "/portfolio3.jpeg",
      
    },
    {
      title: "Heath & Beauty Store",
      img: "/portfolio4.jpeg",
      
    }
  ];
  return (
    <div className={styles.portfolio} id='portfolio'>
      <div className={styles.portfolio_container}>
        <h1>Portfolio</h1>
        <div className={styles.line}></div>

        <Grid.Container gap={2} justify="center">
          {list.map((item, index) => (
            <Grid xs={12} sm={6} md={6} lg={4} key={index}>
              <Card hoverable clickable shadow={false} css={{ height: '800px'}}>
                <Card.Body css={{ p: 0, height: '800px' }}>
                  <Card.Image
                    objectFit="cover"
                    src={item.img}
                    width="100%"
                    // css={}
                    style={{ height: '800px', objectPosition: 'top'}}
                    alt={item.title}
                  />
                </Card.Body>
                <Card.Footer>
                  <Row wrap="wrap" justify="space-between">
                    <Text size={25} b>{item.title}</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
        <Button color="success" auto ghost iconRight={<AiOutlineEye />} css={{marginTop: '30px'}} >
          View More
        </Button>

      </div>
    </div>
  );
}
