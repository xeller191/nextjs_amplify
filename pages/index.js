import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.h1`
  ${tw`flex items-center justify-center w-screen h-screen bg-gray-100`}
`;

const FormContainer = styled.form`
  ${tw`flex flex-col items-center justify-center p-10 bg-white rounded shadow-md `}
`;


export default function Home() {
  return (
    <Container>
      <FormContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 mb-2 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mb-5 text-3xl text-gray-600 uppercase">Login</p>
        <input
          type="email"
          name="email"
          className="p-3 mb-5 border-2 rounded outline-none w-80 focus:border-purple-700"
          autoComplete="off"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          className="p-3 mb-5 border-2 rounded outline-none w-80 focus:border-purple-700"
          autoComplete="off"
          placeholder="Password"
          required
        />
        <button
          className="p-2 font-bold text-white bg-purple-600 rounded hover:bg-purple-900 w-80"
          id="login"
          type="submit"
        >
          <span>Login build3</span>
        </button>
      </FormContainer>
    </Container>
  );
}
