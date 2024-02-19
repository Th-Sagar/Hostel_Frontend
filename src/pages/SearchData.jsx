import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { hostelDetail, searchHostel, searchHostelOne } from "../features/UserDetailSlice";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

const SearchData = () => {
  const { searchItem, token } = useSelector((state) => state.userDetail);
  const { search } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setToken = !!token;

 useEffect(() => {
  if (!setToken) {
    navigate("/");
  }

 }, [setToken, navigate])
 
  useEffect(() => {
    if (search === "show") {
      dispatch(searchHostel());
    } else {
      dispatch(searchHostelOne(search));
    }
  }, [search]);

  if (!searchItem) {
    return <div className="container text-2xl font-bold text-center capitalize">No hostel data available</div>;
  }

  if (!searchItem.hostel) {
    return (
      <div className="container text-2xl font-bold text-center capitalize">
        No hostel data available
      </div>
    );
  }

  const handleClick=(value)=>{
    navigate(`/hostel/show/${value}`)
  }
  return (
    <>
      <main className="container">
        <div className="flex  gap-6 flex-wrap justify-center ">
          {searchItem.hostel.map((hostel, index) => {
            return (
              <Card maxW="sm" key={index} onClick={()=>{
                handleClick(hostel._id) 
              }} className="hover:scale-110 transition-all ease-in-out duration-500">
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" className="capitalize">
                      {hostel.hostelName}
                    </Heading>
                    <Text className="capitalize text-lg font-light">
                      {hostel.hostelDescription}
                    </Text>
                    <div className="flex gap-16">
                      <Text color="blue.600" fontSize="2xl">
                        {hostel.hostelLocation}
                      </Text>

                      <Text color="blue.600" fontSize="2xl">
                        Rs.{hostel.hostelPrice}
                      </Text>
                    </div>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Book Now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Contact Now
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default SearchData;
