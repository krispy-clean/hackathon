"use client"

import { Field, Form, Formik } from "formik"
import * as Yup from "yup"

const SignUpUserForm = () => (
  <div className="max-w-md mx-auto mt-10">
    <div className="bg-violet-100 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-violet-700 mb-4">Sign up as a user</h2>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().required("Required"),
          lastname: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
          confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match")
        })}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex flex-col flex-1">
                <label htmlFor="firstname" className="text-violet-600">
                  First name
                </label>
                <Field className="border border-violet-300 rounded-md p-2" type="text" name="firstname" />
                {errors.firstname && touched.firstname ? <div className="text-red-600">{errors.firstname}</div> : null}
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="lastname" className="text-violet-600">
                  Last name
                </label>
                <Field className="border border-violet-300 rounded-md p-2" type="text" name="lastname" />
                {errors.lastname && touched.lastname ? <div className="text-red-600">{errors.lastname}</div> : null}
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-violet-600">
                Email
              </label>
              <Field className="border border-violet-300 rounded-md p-2 w-full" type="email" name="email" />
              {errors.email && touched.email ? <div className="text-red-600">{errors.email}</div> : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-violet-600">
                Password
              </label>
              <Field className="border border-violet-300 rounded-md p-2 w-full" type="password" name="password" />
              {errors.password && touched.password ? <div className="text-red-600">{errors.password}</div> : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirm-password" className="text-violet-600">
                Confirm Password
              </label>
              <Field className="border border-violet-300 rounded-md p-2 w-full" type="password" name="confirmPassword" />
              {errors.confirmPassword && touched.confirmPassword ? <div className="text-red-600">{errors.confirmPassword}</div> : null}
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-violet-700 text-white rounded-md py-2 px-4 mt-4">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
)

export default SignUpUserForm
