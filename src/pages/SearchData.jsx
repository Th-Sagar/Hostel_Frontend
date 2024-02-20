import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  hostelDetail,
  searchHostel,
  searchHostelOne,
} from "../features/UserDetailSlice";
import {
  Card,
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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");
  const searchQuery = query.charAt(0).toUpperCase() + query.slice(1)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => { 
    if (query === "all") {
      dispatch(searchHostel());
    } else {
      dispatch(searchHostelOne(searchQuery))
    }


  }, [query]);

  if (!searchItem) {
    return (
      <div className="container text-2xl font-bold text-center capitalize">
        No hostel data available
      </div>
    );
  }

  if (!searchItem.hostel) {
    return (
      <div className="container text-2xl font-bold text-center capitalize">
        No hostel data available
      </div>
    );
  }

  const handleDetail = (value) => {
    navigate(`/hostel/show/${value}`);
  };

  const handleRegister = (value) => {
    navigate(`/hostel/book/${value}`);
  };
  return (
    <>
      <main className="container mt-10">
        <div>
          {query === "all" ? (
            <h1 className="text-2xl font-bold text-center capitalize">
              All Hostels
            </h1>
          ) : (
            <h1 className="text-2xl font-bold text-center capitalize">
              Search Result {query}
            </h1>
          )}
        </div>

        <div className="flex  gap-6 flex-wrap justify-center mt-10 ">
          {searchItem.hostel.map((hostel, index) => {
            return (
              <Card
                maxW="sm"
                key={index}
                className="my-10"
              >
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
                    <Text className="capitalize text-lg ">
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
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      onClick={() => {
                        handleRegister(hostel._id);
                      }}
                    >
                      Book Now
                    </Button>
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                      onClick={() => {
                        handleDetail(hostel._id);
                      }}
                    >
                      View Details
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
