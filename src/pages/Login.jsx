import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className=' w-[83%] mx-auto flex place-content-center '>
      <div className=' mt-[80px] '>
      <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>
        <Button className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <Link to={"/signup"} className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
      </div>
    </div>
  )
}
