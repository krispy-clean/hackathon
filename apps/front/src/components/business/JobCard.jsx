import React from "react"
import Link from "next/link"

const JobCard = ({ job }) => (
  <Link
    className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
    href="/"
  >
    <img className="w-full h-48 object-cover" src={job.image} alt="Job" />
    <div className="p-4">
      <div className="flex items-center">
        <img className="w-10 h-10 object-contain" src={job.logo} alt="Company Logo" />
        <div className="ml-2">
          <p className="text-gray-600 text-sm">{job.company}</p>
          <p className="font-bold text-xl text-gray-800">{job.title}</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-gray-600">Localisation: {job.location}</p>
        <p className="text-gray-600">Publié le: {job.date}</p>
      </div>
    </div>
  </Link>
)

export default JobCard
