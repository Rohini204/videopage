import React from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
const Container = styled.div``; 
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;
const Finalpro1 = () => {
  return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://i.pinimg.com/564x/b9/9d/1f/b99d1f1a9e60868f5532c8a0178e5f8c.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>Air Jordan 1 Mid</b></Title>
          <Desc>
          Introducing our latest sports shoe innovation, designed to elevate your performance and style to new heights. Crafted with precision and engineered for excellence, our sports shoes seamlessly blend cutting-edge technology with a sleek and dynamic design.
          </Desc>
          <Desc>
          Optimal Performance<br></br>
          Comfort Redefined<br></br>
          Durable Construction<br></br>
          Dynamic Design<br></br>
          Responsive Cushioning<br></br>
          </Desc>
          <Price>Rs 7500</Price>
          <Desc>
          <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
          The Air Jordan 1 Mid is a solid choice for runners! The Zoom Air technology provides excellent cushioning and responsiveness, making each stride feel effortless. The updated design offers a snug fit without sacrificing comfort.
          </Desc>
          <AddContainer>
            <Link to="https://www.nike.com/in/t/air-jordan-1-mid-older-shoes-wqHdzW/DQ8423-511">
            <Button>PURCHASE</Button>
            </Link>
          </AddContainer>
        </InfoContainer>
     </Wrapper>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default Finalpro1