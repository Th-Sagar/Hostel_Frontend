import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { hostelDetail } from "../features/UserDetailSlice";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  StackItem,
  Text,
} from "@chakra-ui/react";

const HostelDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { hostelInfo } = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(hostelDetail(id));
  }, []);

  return (
    <main className="container  md:w-max">
        <section className="flex justify-center items-center flex-col  md:my-40 ">
        <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        className="h-[25rem]"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading className="capitalize" >{hostelInfo.hostelName}</Heading>

            <Text py="2">
              {hostelInfo.hostelDescription}
            </Text>


            <div className="flex flex-wrap justify-between">
            <Text className="italic">
                {hostelInfo.hostelLocation}
            </Text>

            <Text className="italic">
             Rs.{hostelInfo.hostelPrice}
            </Text>
            </div>
          </CardBody>
          
        <Divider/>
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Book Now
            </Button>
          </CardFooter>
        </Stack>
      </Card>


        </section>
      
    </main>
  );
};

export default HostelDetail;
