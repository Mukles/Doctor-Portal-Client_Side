import { ErrorMessage, FastField, Form, Formik } from "formik";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { auth } from "../../firebase.init";
import Subtitle from "../../Helpers/Subtitle";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithFacebook, FbUser, Fbloading, Fberror] =
    useSignInWithFacebook(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  if ((error || gError || Fberror) && !(loading || gLoading || Fbloading)) {
    let message = gError.message || gError.message || error.message;
    toast.error(message || "Some thing went wrong");
  }
  if (user || gUser || FbUser) {
    navigate("/");
  }
  return (
    <div
      className={`w-full h-screen background-img flex flex-col justify-center items-center sm:items-start sm:ml-10`}
    >
      <div className=" w-96 bg-white p-10 shadow-lg rounded-md">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={schema}
          onSubmit={async (values) => {
            await createUserWithEmailAndPassword(values.email, values.password);
          }}
        >
          {(vlaues) => (
            <Form>
              <Subtitle text={"Create an account"} />
              <div className="flex flex-col space-y-4 mt-12">
                <div className="">
                  <FastField
                    className="w-full focus:outline-none border border-[#01B2C6] rounded-md px-2 py-2 text-sm"
                    type={"email"}
                    placeholder="Enter your email"
                    name="email"
                  />
                  <ErrorMessage
                    component={"span"}
                    name="email"
                    className="text-sm text-red-700"
                  />
                </div>
                <div className="">
                  <FastField
                    placeholder="Enter your password"
                    className="w-full border border-[#01B2C6] focus:outline-none rounded-md px-2 py-2 text-sm"
                    type={"password"}
                    name="password"
                  />
                  <ErrorMessage
                    component={"span"}
                    name="password"
                    className="text-sm text-red-700"
                  />
                </div>
                <div className="form-control">
                  <label className="label justify-start space-x-2 cursor-pointer checked:bg-[#01B2C6]">
                    <input
                      type="checkbox"
                      className="checkbox rounded-none checked:bg-[#01B2C6]"
                    />
                    <span className="label-text">Remember me</span>
                  </label>
                </div>
                <button
                  className="bg-[#01B2C6] w-full text-white uppercase py-2 rounded-sm"
                  type="submit"
                  disabled={loading}
                >
                  Register
                </button>
                <div className="flex justify-center items-center space-x-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link className="text-[#01B2C6]" to={"/forget"}>
                    Forget Password?
                  </Link>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <p className="text-sm">Already have an account?</p>
                  <Link className="text-[#01B2C6]" to={"/account/login"}>
                    Login
                  </Link>
                </div>
                <div className="divider font-bold">OR</div>
                <div className="flex flex-col space-y-2">
                  <button
                    disabled={Fbloading}
                    onClick={async (e) => {
                      e.preventDefault();
                      await signInWithFacebook();
                    }}
                    type="button"
                    className="border border-[#ced4da] py-2 hover:bg-[#F0F0F0] transition-all duration-500 rounded-sm flex space-x-2 items-center justify-center"
                  >
                    <i className="fa-brands fa-facebook-square text-xl text-[#3B5998]"></i>
                    <span>Sign in with Facebook</span>
                  </button>
                  <button
                    type="button"
                    disabled={gLoading}
                    onClick={async (e) => {
                      e.preventDefault();
                      await signInWithGoogle();
                    }}
                    className="border border-[#ced4da] py-2 hover:bg-[#F0F0F0] transition-all duration-500 rounded-sm flex space-x-2 items-center justify-center"
                  >
                    <i className="fa-brands fa-google text-xl text-[#55ACEE]"></i>
                    <span>Sign in with Google</span>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
