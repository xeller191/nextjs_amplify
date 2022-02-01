import styled from "styled-components";
import tw from "twin.macro";

const TextTitle = styled.h1`
  ${tw`text-3xl font-bold underline bg-gray-300 h-20px text-red-50`}
`;

export default function Home() {
  return <TextTitle>Hello world!</TextTitle>;
}
