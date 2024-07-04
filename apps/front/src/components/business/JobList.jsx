import React from "react"
import JobCard from "./JobCard"

const jobOffers = [
  {
    image: "https://via.placeholder.com/400x300",
    logo: "https://via.placeholder.com/50",
    company: "Entreprise A",
    title: "Développeur Web",
    location: "Paris, France",
    date: "3 Juillet 2024"
  },
  {
    image: "https://via.placeholder.com/400x300",
    logo: "https://via.placeholder.com/50",
    company: "Entreprise B",
    title: "Designer UI/UX",
    location: "Lyon, France",
    date: "2 Juillet 2024"
  },
  {
    image: "https://via.placeholder.com/400x300",
    logo: "https://via.placeholder.com/50",
    company: "Entreprise C",
    title: "Chef de Projet",
    location: "Marseille, France",
    date: "1 Juillet 2024"
  },
  {
    image: "https://via.placeholder.com/400x300",
    logo: "https://via.placeholder.com/50",
    company: "Entreprise D",
    title: "Data Scientist",
    location: "Toulouse, France",
    date: "30 Juin 2024"
  },
  {
    image: "https://via.placeholder.com/400x300",
    logo: "https://via.placeholder.com/50",
    company: "Entreprise E",
    title: "Ingénieur DevOps",
    location: "Nice, France",
    date: "29 Juin 2024"
  },
  {
    image: "https://via.placeholder.com/400x300",
    logo: "https://via.placeholder.com/50",
    company: "Entreprise F",
    title: "Analyste Sécurité",
    location: "Nantes, France",
    date: "28 Juin 2024"
  },
  {
    image: "https://via.placeholder.com/400x300",
    logo: "https://via.placeholder.com/50",
    company: "Entreprise G",
    title: "Consultant IT",
    location: "Bordeaux, France",
    date: "27 Juin 2024"
  },
  {
    image: "https://via.placeholder.com/400x300",
    logo: "https://via.placeholder.com/50",
    company: "Entreprise H",
    title: "Product Owner",
    location: "Strasbourg, France",
    date: "26 Juin 2024"
  },
  {
    image: "https://via.placeholder.com/400x300",
    logo: "https://via.placeholder.com/50",
    company: "Entreprise I",
    title: "Architecte Cloud",
    location: "Lille, France",
    date: "25 Juin 2024"
  },
  {
    image: "https://via.placeholder.com/400x300",
    logo: "https://via.placeholder.com/50",
    company: "Entreprise J",
    title: "Responsable Marketing",
    location: "Rennes, France",
    date: "24 Juin 2024"
  }
]

const JobList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {jobOffers.map((job, index) => (
      <JobCard key={index} job={job} />
    ))}
  </div>
)

export default JobList
