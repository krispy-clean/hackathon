"use client"

import { api } from "@hackathon/api"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"

const SignUpCompanyForm = () => (
  <div className="max-w-md mx-auto mt-10">
    <div className="bg-violet-100 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-violet-700 mb-4">Sign up as a user</h2>
      <Formik
        initialValues={{
          companyId: "",
          name: "",
          phoneNumber: "",
          lineOfBusiness: "",
          description: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={Yup.object().shape({
          companyId: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          phoneNumber: Yup.string().required("Required"),
          lineOfBusiness: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
          confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match")
        })}
        onSubmit={values => {
          api.users.index.post(values) // EXAMPLE OF USE OF THE API
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex flex-col flex-1">
                <label htmlFor="companyId" className="text-violet-600">
                  Company ID
                </label>
                <Field className="border border-violet-300 rounded-md p-2" type="text" name="companyId" />
                {errors.companyId && touched.companyId ? <div className="text-red-600">{errors.companyId}</div> : null}
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="name" className="text-violet-600">
                  Name
                </label>
                <Field className="border border-violet-300 rounded-md p-2" type="text" name="name" />
                {errors.name && touched.name ? <div className="text-red-600">{errors.name}</div> : null}
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
              <label htmlFor="phoneNumber" className="text-violet-600">
                Phone number
              </label>
              <Field className="border border-violet-300 rounded-md p-2 w-full" type="email" name="email" />
              {errors.phoneNumber && touched.phoneNumber ? <div className="text-red-600">{errors.phoneNumber}</div> : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="lineOfBusiness" className="text-violet-600">
                Line of business
              </label>
              <Field className="border border-violet-300 rounded-md p-2 w-full" type="text" name="lineOfBusiness" />
              {errors.lineOfBusiness && touched.lineOfBusiness ? <div className="text-red-600">{errors.lineOfBusiness}</div> : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="text-violet-600">
                Description
              </label>
              <Field className="border border-violet-300 rounded-md p-2 w-full" type="textarea" name="description" />
              {errors.description && touched.description ? <div className="text-red-600">{errors.description}</div> : null}
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

export default SignUpCompanyForm
