import { Heading, Text, Image, Box, ScrollView } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
    const params = route.params.item;
    console.log(params)
    return (
        <ScrollView>
            <Header title={"News"} withBack="true" />
            <Box>
                <Image alt={params.title} width={"100%"} height={200} source={{ uri: params.image }} />
                <Box padding={3}>
                    <Text>{params.date}</Text>
                    <Heading>{params.title}</Heading>
                    <Box borderBottomWidth={1} borderBottomColor={"coolGray.300"}
                        padding={3} />
                    <Text marginTop={4} fontSize={17} >{params.content}</Text>
                </Box>
            </Box>
        </ScrollView>
    );
};

export default NewsDetail;


